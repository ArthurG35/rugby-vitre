import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {RouterLink, RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [
    NavLoginComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink
  ],
  exports: [
    NavLoginComponent
  ]
})
export class AuthAssetsModule {
}
