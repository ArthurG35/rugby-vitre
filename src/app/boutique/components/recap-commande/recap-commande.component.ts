import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ArticleTransfere} from "../../../core/class/article-transfere";
import {RecapActive} from "../../../core/class/recap-active";
import {PrixTotal} from "../../../core/class/prix-total";

@Component({
  selector: 'app-recap-commande',
  templateUrl: './recap-commande.component.html',
  styleUrls: ['./recap-commande.component.scss']
})


export class RecapCommandeComponent implements OnInit {

  @Input()
  public initRecapCommande!: ArticleTransfere[];

  public articles!: ArticleTransfere[];


  constructor() {
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.articles = [];
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = chng.currentValue;
      for (let i = 0; i < cur.length; i++) {
        this.articles.push(new ArticleTransfere(cur[i].id, cur[i].name, cur[i].prix, cur[i].quantite, cur[i].size));
      }
    }
  }

  closeRecapCommande(): void {
    RecapActive.setActiveRecap()
  }

  getPrixTotal(): number {
    return PrixTotal.getPrixTotal()
  }

  calculTotalPartArticle(prix: number, quantite: number): number {
    return quantite * prix;
  }
}
