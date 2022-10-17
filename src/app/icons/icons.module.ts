import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconCartComponent} from "./components/icon-cart/icon-cart.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    IconCartComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconCartComponent
  ]
})
export class IconsModule {
}
