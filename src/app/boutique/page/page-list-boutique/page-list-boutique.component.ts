import {Component, OnInit} from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {ArticleI} from "../../../core/interfaces/article-i";
import {ArticlesService} from "../../services/articles.service";
import {SizeService} from "../../services/size.service";
import {SizeI} from "../../../core/interfaces/size-i";

export class article {
  public id: number;
  public taille: string;
  public quantite: number;

  constructor(id: number, taille: string, quantite: number) {
    this.id = id;
    this.taille = taille;
    this.quantite = quantite;
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

  static checkSizeExist(size: string): boolean {
    return this.sizeArray.findIndex(obj => obj.size === size) != -1
  }


}

@Component({
  selector: 'app-page-list-boutique',
  templateUrl: './page-list-boutique.component.html',
  styleUrls: ['./page-list-boutique.component.scss']
})
export class PageListBoutiqueComponent implements OnInit {
  public cart: article[] = [];
  public articles$?: Observable<ArticleI[] | any>;

  private sizeExiste: string[] = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]

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
        }),
        tap(value => console.log(value))
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
        this.cart.push(new article(ref, sizeSelect, quantite))
        console.log(this.cart)
      } else {
        e.path[1].children[0].selectedIndex = null
        e.path[1].children[1].value = 1
      }
    }
  }

  getSizeInfos(sizeId: number): Observable<SizeI> {
    return this.sizeServices.getSizeById(sizeId);
  }

  public getAttribute(size: any): any {
    return (this.sizeExiste)[size - 1] ? (this.sizeExiste)[size - 1] : 'Inconnu';
  }

  checkSizeExist(size: string): boolean {
    return this.sizeExiste.indexOf(size) != -1
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
