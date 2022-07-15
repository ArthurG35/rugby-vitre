import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullWidthComponent } from './components/template-full-width/template-full-width.component';
import { TemplateContainerComponent } from './components/template-container/template-container.component';



@NgModule({
  declarations: [
    TemplateFullWidthComponent,
    TemplateContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateFullWidthComponent,
    TemplateContainerComponent
  ]
})
export class TemplatesModule { }
