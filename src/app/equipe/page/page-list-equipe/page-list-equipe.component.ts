import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {JoueurI} from "../../../core/interfaces/joueur-i";
import {JoueursService} from "../../services/joueurs.service";

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
  }
  getAllJoueurs(): void {
    this.joueurs$ = this.joueurService.getAllJoueurs();
  }

  hover(e : any){
    e.path[0].children[1].classList.add("hovered");
  }
  unhover(e : any){
    e.path[0].children[1].classList.remove("hovered");
  }


}
