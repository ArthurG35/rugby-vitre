import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ArticlesService} from "../boutique/services/articles.service";
import {ArticleI} from "../core/interfaces/article-i";

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<ArticleI[]> {
  constructor(private article: ArticlesService) {
  }

  resolve(): Observable<ArticleI[]> {
    return this.article.getAllArticle();
  }
}
