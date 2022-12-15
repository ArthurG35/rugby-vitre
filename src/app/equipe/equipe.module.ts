import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipeRoutingModule} from './equipe-routing.module';
import {PageListEquipeComponent} from './page/page-list-equipe/page-list-equipe.component';


@NgModule({
  declarations: [
    PageListEquipeComponent,
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
  ],
  exports: [
    PageListEquipeComponent,
  ],
})
export class EquipeModule {
}
