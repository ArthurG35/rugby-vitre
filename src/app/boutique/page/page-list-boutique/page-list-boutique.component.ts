import {Component, OnInit} from '@angular/core';
import {map, Observable, Subscription} from "rxjs";
import {ArticleI} from "../../../core/interfaces/article-i";
import {ArticlesService} from "../../services/articles.service";
import {SizeService} from "../../services/size.service";
import {SizeI} from "../../../core/interfaces/size-i";

export class cart {
  private static cartArray: cart[] = [];
  private static elementInCart = 0;
  public id: number;
  public taille: string;
  public quantite: number;

  constructor(id: number, taille: string, quantite: number) {
    this.id = id;
    this.taille = taille;
    this.quantite = quantite;
  }

  static addCart(ref: number, sizeSelect: string, quantite: number): void {
    if (cart.cartArray.findIndex(obj => obj.id === ref) != -1 && cart.cartArray.findIndex(obj => obj.taille === sizeSelect) != -1) {
      let index = -1;
      for (let i = 0; i < cart.cartArray.length; i++) {
        if (cart.cartArray[i].id === ref) {
          index = i
        }
      }
      cart.cartArray[index].quantite = Number(cart.cartArray[index].quantite) + Number(quantite);
    } else {
      this.cartArray.push(new cart(ref, sizeSelect, quantite));
    }
    cart.countsElement()
    articleTransfere.resetArticleTransfere();
  }

  static getCount(): number {
    return cart.elementInCart;
  }

  static getAllCart(): cart[] {
    return cart.cartArray
  }

  private static countsElement(): void {
    let _elementCounts = 0;
    for (let i = 0; i < cart.cartArray.length; i++) {
      _elementCounts += Number(cart.cartArray[i].quantite)
    }
    cart.elementInCart = _elementCounts;
  }
}


export class articleTransfere {

  private static recapCommande: articleTransfere[] = []
  public quantite: number;
  public name: string;
  public prix: number;
  public size: string;
  private id: number;

  constructor(id: number, name: string, prix: number, quantite: number, size: string) {
    this.id = id;
    this.name = name;
    this.prix = prix;
    this.quantite = quantite
    this.size = size
  }

  static resetArticleTransfere(): void {
    articleTransfere.recapCommande = [];
  }

  static pushToArray(article: articleTransfere): void {
    articleTransfere.recapCommande.push(article);
  }

  static getRecap(): articleTransfere[] {
    return articleTransfere.recapCommande
  }

}

export class sizePossibility {
  private static sizeArray: sizePossibility[] = [];
  public size: string;

  constructor(size: string) {
    this.size = size;
  }

  static addSize(size: sizePossibility): void {
    this.sizeArray.push(size);
  }

  static checkSizeExist(size: any): number {
    for (let i = 0; i < sizePossibility.sizeArray.length; i++) {
      if (sizePossibility.sizeArray[i].size === size) {
        return i
      }
    }
    return -1
  }

  static getSize(index: number): string {
    return sizePossibility.sizeArray[index].size;
  }

}

export class recapActive {
  private static active: boolean = false;
  public active: boolean

  constructor(active: boolean) {
    this.active = active;
  }

  static getActiveRecap(): boolean {
    return recapActive.active
  }

  static setActiveRecap(): void {
    recapActive.active = !recapActive.active;
  }

}

@Component({
  selector: 'app-page-list-boutique',
  templateUrl: './page-list-boutique.component.html',
  styleUrls: ['./page-list-boutique.component.scss']
})
export class PageListBoutiqueComponent implements OnInit {
  public articles$?: Observable<ArticleI[] | any>;
  private subs: Subscription[] = [];


  constructor(
    private articleService: ArticlesService,
    private sizeServices: SizeService
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
    this.subs.push(this.sizeServices.getAllSize().subscribe(sizelist => {
      for (let i = 0; i < sizelist.length; i++) {
        sizePossibility.addSize(new sizePossibility(sizelist[i]["sizeExiste"]));
      }
    }));
  }

  getAllArticles(): void {
    this.articles$ = this.articleService.getAllArticle()
      .pipe(
        map(articles => {
          return this.addSizeToArticle(articles);
        })
      );
  }

  getChange(e: any) {
    if (e.target != null) {
      const sizeSelected: string = e.target.value;
      if (sizePossibility.checkSizeExist(sizeSelected) != -1) {
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
      if (sizePossibility.checkSizeExist(sizeSelect)) {
        cart.addCart(ref, sizeSelect, quantite)
      }
      this.resetCard(e);
      const allCart = cart.getAllCart();
      for (let i = 0; i < allCart.length; i++) {
        this.getArticleToRecap(allCart[i].id, allCart[i].quantite, allCart[i].taille)
      }
    }

  }

  getArticleToRecap(id: number, quantite: number, size: string): void {
    this.subs.push(this.articleService.getArticleById(id).subscribe(article => {
      articleTransfere.pushToArray(new articleTransfere(article.id, article.name, article.prix, quantite, size))
    }));
  };

  resetCard(e: any) {
    e.path[1].children[0].selectedIndex = null;
    e.path[1].children[1].value = 1;
    e.path[1].children[2].disabled = true;
  }

  getSizeInfos(sizeId: number): Observable<SizeI> {
    return this.sizeServices.getSizeById(sizeId);
  }

  public getAttribute(size: number): string {
    return sizePossibility.checkSizeExist(size - 1) ? sizePossibility.getSize(size - 1) : 'Inconnu';
  }

  checkSizeExist(size: string): boolean {
    return sizePossibility.checkSizeExist(size) != -1
  }

  public getCountElement(): number {
    return cart.getCount();
  }

  getCart(): cart[] {
    return cart.getAllCart();
  }

  getRecapArticle(): articleTransfere[] {
    return articleTransfere.getRecap();
  }

  cartToRecap() {
    this.switchActivePageRecap()
  }

  switchActivePageRecap(): void {
    recapActive.setActiveRecap()
  }

  getBoolActiveRecap(): boolean {
    return recapActive.getActiveRecap()
  }

  private addSizeToArticle(articles: ArticleI[]) {
    return articles.map(articles => {
      return {
        ...articles, sizes: articles.sizeShopIds?.map(id => {
          return this.getSizeInfos(id) as Observable<SizeI>
        })
      }
    })
  }
}
