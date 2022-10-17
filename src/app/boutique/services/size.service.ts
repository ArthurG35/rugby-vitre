import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SizeI} from "../../core/interfaces/size-i";

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  private url: string = `${environment.apiUrl}/sizeshop`;

  constructor(private httpClient: HttpClient) {
  }

  getAllSize(): Observable<SizeI[]> {
    return this.httpClient.get<SizeI[]>(this.url);
  }

  getSizeById(id: number): Observable<SizeI> {
    return this.httpClient.get<SizeI>(`${this.url}/${id}`);
  }
}
