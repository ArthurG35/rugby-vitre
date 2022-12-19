import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UiModule} from "./ui/ui.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {AuthInterceptorService} from "./core/services/auth-interceptor.service";
import {AuthGuard} from "./core/guards/auth.guard";
import {AuthentificationService} from "./core/services/authentification.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FontAwesomeModule,
    UiModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthentificationService, AuthInterceptorService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
}
