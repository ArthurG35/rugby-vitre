import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {CookiesService} from "./cookies.service";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private key = "154849484089404894564978489489456408904";

  constructor(private coockieService: CookiesService) {
  }

  public saveData(key: string, value: string) {
    if (!this.coockieService.checkCookieUser()) {
      this.key = this.coockieService.generateId();
      this.coockieService.setCookieUser(this.key);
    }
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    if (this.coockieService.checkCookieUser()) {
      this.key = this.coockieService.getCookieUser();
      let data = localStorage.getItem(key) || "";
      return this.decrypt(data);
    } else {
      return null;
    }
  }

  public clearData() {
    this.coockieService.deleteAllCookiesUser();
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

}
