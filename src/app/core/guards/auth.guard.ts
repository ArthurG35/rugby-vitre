import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthentificationService} from "../services/authentification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthentificationService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.authService.getConnectedUser$().pipe(map(connected => console.log(connected !== null))));
    return this.authService.getConnectedUser$()
      .pipe(
        map(connected => connected !== null ? true : this.router.parseUrl('/login'))
      );
  }

}
