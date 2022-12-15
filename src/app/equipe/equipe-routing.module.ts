import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageListEquipeComponent} from "./page/page-list-equipe/page-list-equipe.component";
import {ListEquipeResolver} from "../resolvers/list-equipe.resolver";

const routes: Routes = [
  {path: '', component: PageListEquipeComponent, resolve: {equipe: ListEquipeResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule {
}
