import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {
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
