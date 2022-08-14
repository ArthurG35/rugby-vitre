import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('/assets/php/request.php').subscribe(
      res=>{console.log(res);

      }
    )}


}
