import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
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
  }

  static getCount(): number {
    return cart.elementInCart;
  }

  private static countsElement(): void {
    let _elementCounts = 0;
    for (let i = 0; i < cart.cartArray.length; i++) {
      _elementCounts += Number(cart.cartArray[i].quantite)
    }
    cart.elementInCart = _elementCounts;
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

@Component({
  selector: 'app-page-list-boutique',
  templateUrl: './page-list-boutique.component.html',
  styleUrls: ['./page-list-boutique.component.scss']
})
export class PageListBoutiqueComponent implements OnInit {
  public articles$?: Observable<ArticleI[] | any>;


  constructor(
    private articleService: ArticlesService,
    private sizeServices: SizeService
  ) {
  }

  ngOnInit(): void {
    this.getSize();
    this.getAllArticles();
  }

  getSize(): void {
    this.sizeServices.getAllSize().subscribe(sizelist => {
      for (let i = 0; i < sizelist.length; i++) {
        sizePossibility.addSize(new sizePossibility(sizelist[i]["sizeExiste"]));
      }
    });
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
      if (sizePossibility.checkSizeExist(sizeSelected)) {
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
      } else {
        e.path[1].children[0].selectedIndex = null
        e.path[1].children[1].value = 1
      }
    }
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
