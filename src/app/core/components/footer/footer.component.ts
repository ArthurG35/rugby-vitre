import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let span_year = document.getElementById("year-copyright") as HTMLElement;
    const currentYear = new Date().getFullYear().toString();
    span_year.innerText = currentYear;
  }

}
