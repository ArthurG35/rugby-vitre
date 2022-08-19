import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    if(document.URL == (window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/")) {
      const box = document.getElementById('id-header');
      if (box != null) {
        box.classList.add('main-page');
      }
    }
  }

}
