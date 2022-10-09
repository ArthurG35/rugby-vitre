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
import {BrowserModule} from "@angular/platform-browser";
import {LazyImgDirective} from "./directives/lazy-img-directive.directive";


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    WidgetComponent,
    LazyImgDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    UiModule,
    SharedModule,
    BrowserModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    UiModule,
    NavComponent,
    FooterComponent,
    WidgetComponent,
  ],
})
export class CoreModule {
}
