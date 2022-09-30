import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoutiqueRoutingModule } from './boutique-routing.module';
import { PageListBoutiqueComponent } from './page/page-list-boutique/page-list-boutique.component';


@NgModule({
  declarations: [
    PageListBoutiqueComponent
  ],
  imports: [
    CommonModule,
    BoutiqueRoutingModule
  ],
  exports: [
    PageListBoutiqueComponent
  ]
})
export class BoutiqueModule { }
