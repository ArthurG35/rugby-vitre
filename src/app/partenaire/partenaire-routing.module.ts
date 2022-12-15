import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageListPartenaireComponent} from "./page/page-list-partenaire/page-list-partenaire.component";
import {PartenaireResolver} from "../resolvers/partenaire.resolver";

const routes: Routes = [
  {path: '', component: PageListPartenaireComponent, resolve: {partenaire: PartenaireResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartenaireRoutingModule {
}
