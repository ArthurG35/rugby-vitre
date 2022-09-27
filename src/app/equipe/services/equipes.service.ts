import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EquipeI} from "../../core/interfaces/equipe-i";

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  private url: string = `/api/v1/equipes`;

  constructor(private httpClient: HttpClient) {
  }

  getAllEquipe(): Observable<EquipeI[]> {
    return this.httpClient.get<EquipeI[]>(this.url);
  }
}
