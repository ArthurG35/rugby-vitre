import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, finalize, Observable, tap} from "rxjs";
import {UserI} from "../interfaces/user-i";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalService} from "./local.service";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  private url: string = `${environment.apiUrl}/users`;
  private connectedUser$ = new BehaviorSubject<UserI | null>(null);

  constructor(private http: HttpClient, private router: Router, private localStore: LocalService) {

  }

  public getConnectedUser$(): Observable<UserI | null> {
    if (this.localStore.getData('userLogger') != null) {
      let session = this.localStore.getData('userLogger')
      this.connectedUser$.next(JSON.parse(session || '{}'));
    }
    return this.connectedUser$.asObservable();
  }

  public authenticate(username: string, password: string): Observable<UserI> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' + password)
    });

    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.get<UserI>(`${this.url}/login`, {headers, params}).pipe(
      tap((data: UserI) => {
        this.localStore.clearData();
        this.localStore.saveData('userLogger', JSON.stringify(data));
        this.connectedUser$.next(this.mapUserI(data));
      })
    );
  }

  logout() {
    this.http.post(`${environment.apiUrl}/logout`, {}).pipe(
      finalize(() => {
        this.localStore.clearData();
        this.connectedUser$.next(null);
        this.router.navigateByUrl(`/`);
      })).subscribe();
  }

  private mapUserI(data: UserI): UserI {
    let userI: UserI = {'id': 0, 'username': '', 'password': '', 'grants': ''};
    userI.id = data.id;
    userI.username = data.username;
    userI.password = data.password;
    userI.grants = "ROLE_MEMBER";
    return userI;
  }
}
