import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArticleI} from "../../core/interfaces/article-i";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private url: string = `${environment.apiUrl}/articles`

  constructor(private httpClient: HttpClient) {
  }

  getAllArticle(): Observable<ArticleI[]> {
    return this.httpClient.get<ArticleI[]>(this.url);
  }
}


