import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {PartenaireI} from "../../core/interfaces/partenaire-i";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  private url: string = `${environment.apiUrl}/partenaires`;

  constructor(private httpClient: HttpClient) {
  }

  getAllPartenaire(): Observable<PartenaireI[]> {
    return this.httpClient.get<PartenaireI[]>(this.url);
  }

}
