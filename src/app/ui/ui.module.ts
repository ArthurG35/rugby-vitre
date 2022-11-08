import {NgModule} from '@angular/core';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterOutlet} from "@angular/router";
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    RouterOutlet,
    CoreModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiModule {
}
