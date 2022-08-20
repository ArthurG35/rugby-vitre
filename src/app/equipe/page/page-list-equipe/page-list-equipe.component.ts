import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-list-equipe',
  templateUrl: './page-list-equipe.component.html',
  styleUrls: ['./page-list-equipe.component.scss']
})
export class PageListEquipeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  hover(e : any){
    e.path[0].children[1].classList.add("hovered");
  }
  unhover(e : any){
    e.path[0].children[1].classList.remove("hovered");
  }


}
