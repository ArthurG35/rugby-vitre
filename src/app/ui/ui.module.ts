import {NgModule} from '@angular/core';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterOutlet} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {DashboardLayoutComponent} from './components/dashboard-layout/dashboard-layout.component';
import {AuthAssetsModule} from "../authAssets/auth-assets.module";


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    RouterOutlet,
    CoreModule,
    AuthAssetsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiModule {
}
