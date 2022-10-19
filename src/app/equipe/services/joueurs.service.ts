import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {finalize, Observable, of, share, tap} from "rxjs";
import {JoueurI} from "../../core/interfaces/joueur-i";

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  private url: string = `${environment.apiUrl}/joueurs`;
  private cache?: JoueurI[];
  private cachedObservableJoueur$?: null;
  private idEquipe?: number;

  constructor(private httpClient: HttpClient) {
  }

  getJoueursByEquipeId(equipeId: number): Observable<JoueurI[]> {
    if (this.idEquipe == equipeId) {
      let observable: Observable<JoueurI[]> | undefined;
      if (this.cache) {
        observable = of(this.cache);
      } else if (this.cachedObservableJoueur$) {
        observable = this.cachedObservableJoueur$;
      } else {
        return this.httpClient.get<JoueurI[]>(`${this.url}/byequipe/${equipeId}`).pipe(
          tap(res => this.cache = res),
          share(),
          finalize(() => this.cachedObservableJoueur$ = null)
        );
      }
      return observable;
    } else {
      return this.httpClient.get<JoueurI[]>(`${this.url}/byequipe/${equipeId}`).pipe(
        tap(res => this.cache = res),
        share(),
        finalize(() => this.cachedObservableJoueur$ = null)
      );
    }
  }
}
