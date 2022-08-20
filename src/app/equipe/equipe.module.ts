import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipeRoutingModule} from './equipe-routing.module';
import {PageListEquipeComponent} from './page/page-list-equipe/page-list-equipe.component';
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    PageListEquipeComponent,
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    CoreModule,
  ],
  exports: [
    PageListEquipeComponent,
  ],
})
export class EquipeModule {
}
