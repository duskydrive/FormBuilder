import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserData } from '../service/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
  requestError = '';
  // text for submit btn in view component
  btnText = 'Login';
  // text for url to register
  urlTitle = 'Register';
  // register url router link
  routeUrl = '/register';

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private _route:Router, private _authService: AuthService) { }

  onSubmit() {
    const userData: UserData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

    this._authService.login(userData)
      .subscribe({
        error: (e) => this.requestError = e.error,
        complete: () => this._route.navigate([''])
      })             
  }
}
