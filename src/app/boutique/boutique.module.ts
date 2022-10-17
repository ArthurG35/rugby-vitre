import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoutiqueRoutingModule} from './boutique-routing.module';
import {PageListBoutiqueComponent} from './page/page-list-boutique/page-list-boutique.component';
import {IconsModule} from "../icons/icons.module";


@NgModule({
  declarations: [
    PageListBoutiqueComponent,
  ],
  imports: [
    CommonModule,
    BoutiqueRoutingModule,
    IconsModule
  ],
  exports: [
    PageListBoutiqueComponent
  ]
})
export class BoutiqueModule {
}
