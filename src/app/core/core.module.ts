import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {TemplatesModule} from "../templates/templates.module";
import {UiModule} from "../ui/ui.module";
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    UiModule
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    UiModule
  ]
})
export class CoreModule { }
