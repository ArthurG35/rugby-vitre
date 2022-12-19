import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public allowed$!: Observable<boolean>;

  constructor(private authService: AuthentificationService) {
  }

  ngOnInit(): void {
    this.isAllowed();
  }

  test(active: boolean): void {
    const header = document.getElementById('id-header');
    if (active) {
      if (header != null) {
        header.classList.add('main-page');
      }
    } else {
      if (header != null) {
        header.classList.remove('main-page');
      }
    }
  }

  private isAllowed(): void {
    this.allowed$ = this.authService.getConnectedUser$().pipe(map(connected => connected ? true : false));
  }

}
