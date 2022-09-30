import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PartenaireRoutingModule} from './partenaire-routing.module';
import {PageListPartenaireComponent} from './page/page-list-partenaire/page-list-partenaire.component';


@NgModule({
  declarations: [
    PageListPartenaireComponent
  ],
  imports: [
    CommonModule,
    PartenaireRoutingModule
  ],
  exports: [
    PageListPartenaireComponent
  ]
})
export class PartenaireModule {
}
