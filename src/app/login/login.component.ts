import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {
  requestError = '';

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
      const userData = this.loginForm.value;

      this._authService.login(userData)
        .subscribe({
          error: (e) => console.error('error', this.requestError = e.error),
          complete: () => this._route.navigate([''])
        })             
  }
}
