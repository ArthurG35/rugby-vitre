import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {PartenaireModule} from "./partenaire/partenaire.module";
import {BoutiqueModule} from "./boutique/boutique.module";
import {EquipeModule} from "./equipe/equipe.module";
import {UiModule} from "./ui/ui.module";
import {PageLoginComponent} from './login/page/page-login/page-login.component';
import {DashboardComponent} from "./dashboard/page/dashboard/dashboard.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    EquipeModule,
    PartenaireModule,
    BoutiqueModule,
    FontAwesomeModule,
    UiModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
}
