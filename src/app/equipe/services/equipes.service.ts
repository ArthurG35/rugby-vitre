import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EquipeI} from "../../core/interfaces/equipe-i";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  private url: string = `${environment.apiUrl}/equipes`;

  constructor(private httpClient: HttpClient) {
  }

  getEquipeTrue(): Observable<EquipeI[]> {
    return this.httpClient.get<EquipeI[]>(`${this.url}/equipevisibility/true`);
  }

}
