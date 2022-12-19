import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {Router, RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {WidgetComponent} from './components/widget/widget.component';
import {BrowserModule} from "@angular/platform-browser";
import {LazyImgDirective} from "./directives/lazy-img-directive.directive";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./services/auth-interceptor.service";


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
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    WidgetComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useFactory: function (router: Router) {
      return new AuthInterceptorService(router)
    },
    multi: true,
    deps: [Router]
  }]
})
export class CoreModule {
}
