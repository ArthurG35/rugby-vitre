import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {finalize, Observable, of, share, tap} from "rxjs";
import {PartenaireI} from "../../core/interfaces/partenaire-i";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  private url: string = `${environment.apiUrl}/partenaires`;
  private cache?: PartenaireI[];
  private cachedObservablePartenaire$?: null;


  constructor(private httpClient: HttpClient) {
  }

  getAllPartenaire(): Observable<PartenaireI[]> | undefined {
    let observable: Observable<PartenaireI[]> | undefined;
    if (this.cache) {
      observable = of(this.cache);
    } else if (this.cachedObservablePartenaire$) {
      observable = this.cachedObservablePartenaire$;
    } else {
      return this.httpClient.get<PartenaireI[]>(this.url).pipe(
        tap(res => this.cache = res),
        share(),
        finalize(() => this.cachedObservablePartenaire$ = null)
      );
    }
    return observable
  }

}
