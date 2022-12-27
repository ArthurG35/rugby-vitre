import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {EquipeComponent} from "./page/equipe/equipe.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'equipes', component: EquipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
