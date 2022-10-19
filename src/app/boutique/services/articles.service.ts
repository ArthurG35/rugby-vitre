import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {finalize, Observable, of, share, tap} from "rxjs";
import {ArticleI} from "../../core/interfaces/article-i";

@Injectable({
  providedIn: 'root'
})


export class ArticlesService {

  private url: string = `${environment.apiUrl}/articles`
  private cache?: ArticleI[];
  private cachedObservableArticle$?: Observable<ArticleI[]> | null;

  constructor(private httpClient: HttpClient) {
  }

  getAllArticle(): Observable<ArticleI[]> | null {
    let observable: Observable<ArticleI[]> | null;
    if (this.cache) {
      observable = of(this.cache);
    } else if (this.cachedObservableArticle$) {
      observable = this.cachedObservableArticle$;
    } else {
      this.cachedObservableArticle$ = this.httpClient.get<ArticleI[]>(this.url).pipe(
        tap(res => this.cache = res),
        share(),
        finalize(() => this.cachedObservableArticle$ = null)
      );
      observable = this.cachedObservableArticle$
    }
    return observable
  }

  getArticleById(id: number): ArticleI | null {
    if (this.cache) {
      for (let i = 0; i < this.cache?.length; i++) {
        if (this.cache[i].id == id) {
          return this.cache[i]
        }
      }
    }
    return null

  }


}


