import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {JoueurI} from "../../../core/interfaces/joueur-i";
import {JoueursService} from "../../services/joueurs.service";
import {Poste} from "../../../core/enums/poste";

@Component({
  selector: 'app-page-list-equipe',
  templateUrl: './page-list-equipe.component.html',
  styleUrls: ['./page-list-equipe.component.scss']
})
export class PageListEquipeComponent implements OnInit {
  public joueurs$?: Observable<JoueurI[]>;

  constructor(private joueurService: JoueursService) {
  }

  ngOnInit(): void {
    this.getAllJoueurs();
    console.log(this.getAttribute(Poste, "DEUXIEMELIGNE"));
  }

  getAllJoueurs(): void {
    this.joueurs$ = this.joueurService.getAllJoueurs();
  }

  getEnumsForGetValue(attributeName: string): string{
    return this.getAttribute(Poste, attributeName);
  }

  getAttribute(enums: any, attributeName: string): string {
    return !!enums[attributeName] ? enums[attributeName] : 'Inconnu';
  }
  hover(e: any) {
    e.path[0].children[1].classList.add("hovered");
  }

  unhover(e: any) {
    e.path[0].children[1].classList.remove("hovered");
  }


}
