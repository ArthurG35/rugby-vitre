import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {EquipeModule} from "./equipe/equipe.module";
import {PartenaireModule} from "./partenaire/partenaire.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
    EquipeModule,
    PartenaireModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
