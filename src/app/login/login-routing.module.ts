import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageLoginComponent} from "./page/page-login/page-login.component";

const routes: Routes = [
  {path: '', component: PageLoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
