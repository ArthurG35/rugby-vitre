import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesModule} from "../templates/templates.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
