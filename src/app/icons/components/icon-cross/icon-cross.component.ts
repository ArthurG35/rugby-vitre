import {Component, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-cross',
  templateUrl: './icon-cross.component.html',
  styleUrls: ['./icon-cross.component.scss']
})
export class IconCrossComponent implements OnInit {
  public myIcon: IconDefinition = faXmark;

  constructor() {
  }

  ngOnInit(): void {
  }

}
