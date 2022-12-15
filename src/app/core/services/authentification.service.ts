import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {UserI} from "../interfaces/user-i";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, finalize, Observable, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private url: string = `${environment.apiUrl}/users`;
  private connectedUser$ = new BehaviorSubject<UserI | null>(null);

  constructor(private http: HttpClient,
              private router: Router,) {
  }

  public getConnectedUser$(): Observable<UserI | null> {
    return this.connectedUser$.asObservable();
  }

  public authenticate(username: string, password: string): Observable<UserI> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' + password)
    });

    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    console.log(this.url);

    return this.http.get<UserI>(`${this.url}/login`, {headers, params}).pipe(
      tap((data: UserI) => {
        localStorage.setItem('myUser', JSON.stringify(data));
        this.connectedUser$.next(this.mapUserI(data));
      })
    );
  }


  logout() {
    this.http.post(`${environment.apiUrl}/logout`, {}).pipe(
      finalize(() => {
        this.connectedUser$.next(null);
        this.router.navigateByUrl(`/login`).then(r => console.log(r));
      })).subscribe();
  }

  private mapUserI(data: UserI): UserI {
    let userI: UserI = {'id': 0, 'username': '', 'password': ''};
    userI.id = data.id;
    userI.username = data.username;
    userI.password = data.password;
    return userI;
  }
}


