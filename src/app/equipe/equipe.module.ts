import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EquipeRoutingModule} from './equipe-routing.module';
import {PageListEquipeComponent} from './page/page-list-equipe/page-list-equipe.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    PageListEquipeComponent,
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    SharedModule,
    CoreModule,
  ],
  exports: [
    PageListEquipeComponent,
  ],
})
export class EquipeModule { }
