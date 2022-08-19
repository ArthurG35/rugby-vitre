import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageListEquipeComponent} from "./page/page-list-equipe/page-list-equipe.component";

const routes: Routes = [
  {path:'',component:PageListEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
