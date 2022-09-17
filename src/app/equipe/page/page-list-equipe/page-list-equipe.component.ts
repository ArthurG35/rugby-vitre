import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {JoueurI} from "../../../core/interfaces/joueur-i";
import {JoueursService} from "../../services/joueurs.service";
import {Poste} from "../../../core/enums/poste";
import {EquipeI} from "../../../core/interfaces/equipe-i";
import {EquipesService} from "../../services/equipes.service";

@Component({
  selector: 'app-page-list-equipe',
  templateUrl: './page-list-equipe.component.html',
  styleUrls: ['./page-list-equipe.component.scss']
})
export class PageListEquipeComponent implements OnInit {
  public joueurs$?: Observable<JoueurI[]>;
  public equipe$?: Observable<EquipeI[]>;

  constructor(private joueurService: JoueursService, private equipeService: EquipesService) {
  }

  ngOnInit(): void {
    this.getJoueursByEquipeId(1);
    this.getAllequipe();
  }

  getTest(number: number): void {
    this.getJoueursByEquipeId(number)
  }

  getAllJoueurs(): void {
    this.joueurs$ = this.joueurService.getAllJoueurs();
  }

  getAllequipe(): void {
    this.equipe$ = this.equipeService.getAllEquipe();
  }

  getJoueursByEquipeId(equipeId: number): void {
    this.joueurs$ = this.joueurService.getJoueursByEquipeId(equipeId)
  }

  getEnumsForGetValue(attributeName: string): string {
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

  switchDisplay() {
    const list = document.getElementById('list') as HTMLDivElement | null;
    if (list != null) {
      list.classList.toggle('open')
    }

  }


  selectorLiClicked(e: any, id: number) {
    const selected = e.path[0].innerText;
    const box = document.getElementById('selectorEquipeTexte') as HTMLDivElement | null;
    if (box != null) {
      box.innerText = selected;
      this.getJoueursByEquipeId(id);
    }
    this.switchDisplay();
  }
}
