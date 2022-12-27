import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { BoardComponent } from './components/board/board.component';


@NgModule({
  declarations: [
    NavLoginComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink
  ],
  exports: [
    NavLoginComponent,
    BoardComponent
  ]
})
export class AuthAssetsModule {
}
