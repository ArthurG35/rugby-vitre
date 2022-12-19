import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor(private authService: AuthentificationService) {
  }

  ngOnInit(): void {
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

}
