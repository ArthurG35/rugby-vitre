import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconCartComponent} from "./components/icon-cart/icon-cart.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IconCrossComponent} from './components/icon-cross/icon-cross.component';


@NgModule({
  declarations: [
    IconCartComponent,
    IconCrossComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconCartComponent,
    IconCrossComponent
  ]
})
export class IconsModule {
}
