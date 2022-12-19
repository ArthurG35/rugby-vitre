import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {UserI} from 'src/app/core/interfaces/user-i';
import {AuthentificationService} from "../../../core/services/authentification.service";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public initUser: UserI = {'id': 0, 'username': '', 'password': '', 'grants': ''};

  public loginForm!: FormGroup;

  constructor(private authService: AuthentificationService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      id: [this.initUser.id],
      username: [this.initUser.username, Validators.required],
      password: [this.initUser.password, Validators.required]
    });
  }

  login(): void {
    this.authService.authenticate(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
