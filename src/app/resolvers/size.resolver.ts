import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {SizeService} from "../boutique/services/size.service";
import {SizeI} from "../core/interfaces/size-i";

@Injectable({
  providedIn: 'root'
})
export class SizeResolver implements Resolve<SizeI[]> {
  constructor(private size: SizeService) {
  }

  resolve(): Observable<SizeI[]> {
    return this.size.getAllSize();
  }
}
