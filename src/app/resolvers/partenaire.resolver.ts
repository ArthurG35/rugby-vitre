import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {PartenaireI} from "../core/interfaces/partenaire-i";
import {PartenairesService} from "../partenaire/services/partenaires.service";

@Injectable({
  providedIn: 'root'
})
export class PartenaireResolver implements Resolve<PartenaireI[]> {
  constructor(private partenaire: PartenairesService) {
  }

  resolve(): Observable<PartenaireI[]> {
    return this.partenaire.getAllPartenaire();
  }
}
