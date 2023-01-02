import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {EquipeI} from "../../../core/interfaces/equipe-i";
import {EquipesService} from "../../../equipe/services/equipes.service";
import {JoueurI} from "../../../core/interfaces/joueur-i";
import {JoueursService} from "../../../equipe/services/joueurs.service";
import {Poste} from "../../../core/enums/poste";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {


  public equipe$?: Observable<EquipeI[]>;

  public joueurs$?: Observable<JoueurI[]>;


  poste = Poste;


  private equipeLoad!: number;

  constructor(private equipeService: EquipesService, private joueurService: JoueursService) {

  }

  getChangeValue(e: string) {
    this.getJoueursByEquipeId(Number(e));
  }

  ngOnInit(): void {
    this.getEquipeTrue();
    this.getChangeValue("1");
  }

  public removeJoueurFromEquipe(joueur: JoueurI): void {
    this.removeJoueur(joueur);
  }

  private getEquipeTrue(): void {
    this.equipe$ = this.equipeService.getEquipeTrue().pipe(map((equipes: EquipeI[]) => equipes.sort((a: EquipeI, b: EquipeI) => a.id - b.id)));
  }

  private getJoueursByEquipeId(equipeId: number): void {
    if (equipeId != this.equipeLoad) {
      this.joueurs$ = this.joueurService.getJoueursByEquipeId(equipeId);
      this.equipeLoad = equipeId;
    }
  }

  private removeJoueur(joueur: JoueurI): void {
    joueur.placement = 0;
    joueur.equipeId = 1;
    joueur.poste = this.poste.AUCUN;
    this.joueurs$?.pipe()
    this.joueurService.updateJoueur(joueur).subscribe(
      () => {
        const row = document.querySelector('[data-row="' + joueur.id + '"]')
        if (row) {
          row.remove();
        }
      }
    );
  }


}
