import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PartenaireI} from "../../../core/interfaces/partenaire-i";
import {PartenairesService} from "../../services/partenaires.service";
import {Importance} from "../../../core/enums/importance";

@Component({
  selector: 'app-page-list-partenaire',
  templateUrl: './page-list-partenaire.component.html',
  styleUrls: ['./page-list-partenaire.component.scss']
})
export class PageListPartenaireComponent implements OnInit {

  public partenaires$?: Observable<PartenaireI[]>;
  Importance = Importance;

  constructor(private partenaireService: PartenairesService) {
  }

  ngOnInit(): void {
    this.getAllPartenaire();
  }

  getAllPartenaire() {
    this.partenaires$ = this.partenaireService.getAllPartenaire();
  }

  checkImportance(partenaire: PartenaireI, importance: string): boolean {
    return partenaire.importance == importance;
  }

}
