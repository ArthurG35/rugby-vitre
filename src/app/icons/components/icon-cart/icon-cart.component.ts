import {Component, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-cart',
  templateUrl: './icon-cart.component.html',
  styleUrls: ['./icon-cart.component.scss']
})
export class IconCartComponent implements OnInit {
  public myIcon: IconDefinition = faCartShopping;

  constructor() {
  }

  ngOnInit(): void {
  }

}
