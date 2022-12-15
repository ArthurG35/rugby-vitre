import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ArticleI} from "../../../core/interfaces/article-i";
import {ArticlesService} from "../../services/articles.service";
import {SizeService} from "../../services/size.service";
import {SizeI} from "../../../core/interfaces/size-i";
import {ArticleTransfere} from "../../../core/class/article-transfere";
import {Cart} from "../../../core/class/cart";
import {SizePossibility} from "../../../core/class/size-possibility";
import {PrixTotal} from "../../../core/class/prix-total";
import {RecapActive} from "../../../core/class/recap-active";

@Component({
  selector: 'app-page-list-boutique',
  templateUrl: './page-list-boutique.component.html',
  styleUrls: ['./page-list-boutique.component.scss']
})
export class PageListBoutiqueComponent implements OnInit {
  public articles$?: Observable<ArticleI[]> | null;
  private subs: Subscription[] = [];


  constructor(
    private articleService: ArticlesService,
    private sizeServices: SizeService,
  ) {
  }

  ngOnInit(): void {
    this.getSize();
    this.getAllArticles();
  }

  ngOnDestroy() {
    this.subs.forEach(value => value.unsubscribe())
  }

  getSize(): void {
    let ObsSize = this.sizeServices.getAllSize();
    if (ObsSize != null) {
      this.subs.push(ObsSize.subscribe(sizelist => {
        for (let i = 0; i < sizelist.length; i++) {
          SizePossibility.addSize(new SizePossibility(sizelist[i]["sizeExiste"]));
        }
      }));
    }
  }

  getAllArticles(): void {
    this.articles$ = this.articleService.getAllArticle();
  }

  getChange(e: any) {
    if (e.target != null) {
      const sizeSelected: string = e.target.value;
      if (SizePossibility.checkSizeExist(sizeSelected) != -1) {
        if (e.path[1].children[2].type === "submit") {
          e.path[1].children[2].disabled = false;
        } else {
          e.target.selectedIndex = null;
        }
      } else {
        e.target.selectedIndex = null;
      }
    }
  }

  addToCart(e: any) {
    if (e.target.getAttribute("data-shop")) {
      const ref = e.target.getAttribute("data-article");
      const quantite = e.path[1].children[1].value;
      const sizeSelect = e.path[1].children[0].value;
      if (SizePossibility.checkSizeExist(sizeSelect) != -1) {
        Cart.addCart(ref, sizeSelect, quantite)
      }
      this.resetCard(e);
      ArticleTransfere.resetArticleTransfere();
      const allCart = Cart.getAllCart();
      PrixTotal.resetPrixTotal();
      for (let i = 0; i < allCart.length; i++) {
        this.getArticleToRecap(allCart[i].id, allCart[i].quantite, allCart[i].taille)
      }
    }
  }


  getArticleToRecap(id: number, quantite: number, size: string): void {
    let obsSingleArticle: ArticleI | undefined = this.articleService.getArticleById(id);
    if (obsSingleArticle) {
      PrixTotal.calculPrix(obsSingleArticle.prix, quantite);
      ArticleTransfere.pushToArray(new ArticleTransfere(obsSingleArticle.id, obsSingleArticle.name, obsSingleArticle.prix, quantite, size))
    }
  };

  getPrixTotalCommande(): number {
    return PrixTotal.getPrixTotal();
  }

  resetCard(e: any) {
    e.path[1].children[0].selectedIndex = null;
    e.path[1].children[1].value = 1;
    e.path[1].children[2].disabled = true;
  }

  getSizeInfos(sizeId: number): Observable<SizeI> {
    return this.sizeServices.getSizeById(sizeId);
  }

  public getAttribute(size: number): string {
    return SizePossibility.checkSizeExist(size - 1) ? SizePossibility.getSize(size - 1) : 'Inconnu';
  }

  checkSizeExist(size: string): boolean {
    return SizePossibility.checkSizeExist(size) != -1
  }

  public getCountElement(): number {
    return Cart.getCount();
  }

  getCart(): Cart[] {
    return Cart.getAllCart();
  }

  getRecapArticle(): ArticleTransfere[] {
    return ArticleTransfere.getRecap();
  }

  cartToRecap() {
    this.switchActivePageRecap()
  }

  switchActivePageRecap(): void {
    RecapActive.setActiveRecap()
  }

  getBoolActiveRecap(): boolean {
    return RecapActive.getActiveRecap()
  }

  getFormat(blob: string): string {
    return atob(blob);
  }


}
