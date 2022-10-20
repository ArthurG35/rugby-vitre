import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {EquipeI} from "../core/interfaces/equipe-i";
import {EquipesService} from "../equipe/services/equipes.service";

@Injectable({
  providedIn: 'root'
})
export class ListEquipeResolver implements Resolve<EquipeI[]> {
  constructor(private equipe: EquipesService) {
  }

  resolve(): Observable<EquipeI[]> {
    return this.equipe.getEquipeTrue();
  }
}
