import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private coockieService: CookieService) {
  }

  public generateId(): string {
    return this.randimizeTime() + this.randomizeNumbers();
  };

  public getCookieUser(): string {
    return this.getCookie('userLogger');
  }

  public setCookieUser(value: string) {
    this.setCookie('userLogger', value);
  }

  public deleteAllCookiesUser() {
    this.deleteAllCookies();
  }

  public checkCookieUser(): boolean {
    return this.checkCookie('userLogger');
  }

  private randimizeTime(): string {
    return String(Date.now());
  }

  private randomizeNumbers(): string {
    var text = String(Math.random());
    for (var i = text.length; i < 19; ++i) {
      text += '0';
    }
    return text.substring(2, 19);
  }

  private checkCookie(name: string): boolean {
    return this.coockieService.check(name);
  }

  private getCookie(name: string): string {
    return this.coockieService.get(name);
  }

  private setCookie(name: string, value: string) {
    this.coockieService.set(name, value, 236682000000);
  }

  private deleteAllCookies() {
    this.coockieService.deleteAll();
  }

}
