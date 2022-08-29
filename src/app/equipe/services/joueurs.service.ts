import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JoueurI} from "../../core/interfaces/joueur-i";

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  private url:string=`${environment.host+environment.apiUrl}/joueurs`;

  constructor(private httpClient: HttpClient) { }

  getAllJoueurs():Observable<JoueurI[]>{
    return this.httpClient.get<JoueurI[]>(this.url);
  }
}
