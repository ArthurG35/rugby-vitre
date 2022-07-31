import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {TemplatesModule} from "../templates/templates.module";
import {UiModule} from "../ui/ui.module";
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
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
    UiModule,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
