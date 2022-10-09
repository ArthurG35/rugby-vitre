import {Component, HostListener, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {JoueurI} from "../../../core/interfaces/joueur-i";
import {JoueursService} from "../../services/joueurs.service";
import {Poste} from "../../../core/enums/poste";
import {EquipeI} from "../../../core/interfaces/equipe-i";
import {EquipesService} from "../../services/equipes.service";
import {Placement} from "../../../core/enums/placement";


@Component({
  selector: 'app-page-list-equipe',
  templateUrl: './page-list-equipe.component.html',
  styleUrls: ['./page-list-equipe.component.scss']
})
export class PageListEquipeComponent implements OnInit {

  ////////////INIT\\\\\\\\\\\\
  public joueurs$?: Observable<JoueurI[]>;
  public equipe$?: Observable<EquipeI[]>;
  Poste = Poste;
  Placement = Placement;
  private equipeLoad!: number;
  private menu: boolean = false;

  constructor(private joueurService: JoueursService, private equipeService: EquipesService) {
  }

  ngOnInit(): void {
    this.getEquipeTrue();
  }

  ////////////Functions\\\\\\\\\\\\
  getAllJoueurs(): void {
    this.joueurs$ = this.joueurService.getAllJoueurs();
  }

  getAllEquipe(): void {
    this.equipe$ = this.equipeService.getAllEquipe();
  }

  getJoueursByEquipeId(equipeId: number): void {
    if (equipeId != this.equipeLoad) {
      this.joueurs$ = this.joueurService.getJoueursByEquipeId(equipeId);
      this.equipeLoad = equipeId;
    }
  }

  getEnumsForGetValue(attributeName: string): string {
    return this.getAttribute(Poste, attributeName);
  }

  getAttribute(enums: any, attributeName: string): string {
    return !!enums[attributeName] ? enums[attributeName] : 'Inconnu';
  }

  getEquipeTrue(): void {
    this.equipe$ = this.equipeService.getEquipeTrue();
  }


  ////////////Card\\\\\\\\\\\\
  hover(e: any) {
    e.path[0].children[1].classList.add("hovered");
  }

  unhover(e: any) {
    e.path[0].children[1].classList.remove("hovered");
  }

  checkPoste(joueur: JoueurI, posteAttendu: string): boolean {
    return joueur.poste == posteAttendu;
  }

  getPlacement(joueur: JoueurI): string {
    return Placement[joueur.placement]
  }


  ////////////Menu\\\\\\\\\\\\
  switchDisplay() {
    const list = document.getElementById('list') as HTMLDivElement | null;
    const arrow = document.getElementById('arrowList') as HTMLDivElement | null;
    if (list != null && arrow != null) {
      list.classList.toggle('open')
      arrow.classList.toggle('listOpen')
      this.menu = !this.menu;
    }
  }

  selectorLiClicked(e: any, id: number) {
    const selected = e.target.getAttribute("data-equipe-name");
    const box = document.getElementById('selectorEquipeTexte') as HTMLDivElement | null;
    if (box != null) {
      box.innerText = selected;
      this.getJoueursByEquipeId(id);
    }
    this.switchDisplay();
  }

  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    if (!element.classList.contains('isMenu') && this.menu) {
      this.switchDisplay();
    }
  }
}
