import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {PageLoginComponent} from "./page/page-login/page-login.component";


@NgModule({
  declarations: [
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageLoginComponent
  ]
})
export class LoginModule {
}
