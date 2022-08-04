import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {TemplatesModule} from "../templates/templates.module";
import {UiModule} from "../ui/ui.module";
import {HomeComponent} from './components/home/home.component';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {WidgetComponent} from './components/widget/widget.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    WidgetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    UiModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    UiModule,
    NavComponent,
    FooterComponent,
    WidgetComponent,
  ]
})
export class CoreModule {
}
