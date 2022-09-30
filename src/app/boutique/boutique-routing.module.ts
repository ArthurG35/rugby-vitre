import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageListBoutiqueComponent} from "./page/page-list-boutique/page-list-boutique.component";

const routes: Routes = [
  {path: '', component: PageListBoutiqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiqueRoutingModule {
}
