import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {AuthentificationService} from "../../core/services/authentification.service";

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.scss']
})
export class NavLoginComponent implements OnInit {

  public open: boolean = false;

  constructor(private authService: AuthentificationService, private eRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any; }) {
    if (!this.eRef.nativeElement.contains(event.target) && this.open) {
      this.closeMenu();
    }
  }

  public closeMenu() {
    this.open = false;
    this.menuFonction();
  }

  ngOnInit(): void {
  }

  public switchMenu() {
    this.open = !this.open;
    this.menuFonction();
  }

  public logout() {
    this.closeMenu();
    this.authService.logout();
  }

  private menuFonction() {
    const buttonMenu = document.getElementById('buttonMenu');
    const menu = document.getElementById('menu');
    if (buttonMenu && menu) {
      if (this.open) {
        buttonMenu.classList.add('is-active');
        menu.classList.add('oppenned');
      } else {
        buttonMenu.classList.remove('is-active');
        menu.classList.remove('oppenned');
      }
    }
  }
}
