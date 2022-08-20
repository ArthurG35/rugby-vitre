import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplatesModule} from "../templates/templates.module";
import {ClassementComponent} from "../core/components/classement/classement.component";


@NgModule({
  declarations: [
    ClassementComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TemplatesModule,
    ClassementComponent,
  ],
})
export class SharedModule {
}
