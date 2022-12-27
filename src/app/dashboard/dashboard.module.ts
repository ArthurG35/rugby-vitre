import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {EquipeComponent} from './page/equipe/equipe.component';
import {AuthAssetsModule} from "../authAssets/auth-assets.module";


@NgModule({
  declarations: [
    DashboardComponent,
    EquipeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    AuthAssetsModule,
  ],
  exports: [
    DashboardComponent,
    EquipeComponent
  ]
})
export class DashboardModule {
}
