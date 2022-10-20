import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {finalize, Observable, of, share, tap} from "rxjs";
import {SizeI} from "../../core/interfaces/size-i";

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  private url: string = `${environment.apiUrl}/sizeshop`;
  private cache?: SizeI[];
  private cachedObservableSize$?: Observable<SizeI[]> | null;

  constructor(private httpClient: HttpClient) {
  }

  getAllSize(): Observable<SizeI[]> {
    let observable: Observable<SizeI[]>;
    if (this.cache) {
      observable = of(this.cache);
    } else if (this.cachedObservableSize$) {
      observable = this.cachedObservableSize$;
    } else {
      this.cachedObservableSize$ = this.httpClient.get<SizeI[]>(this.url).pipe(
        tap(res => this.cache = res),
        share(),
        finalize(() => this.cachedObservableSize$ = null)
      );
      observable = this.cachedObservableSize$;
    }
    return observable
  }

  getSizeById(id: number): Observable<SizeI> {
    return this.httpClient.get<SizeI>(`${this.url}/${id}`);
  }
}
