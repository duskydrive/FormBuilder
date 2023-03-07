import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent {
  requestError = '';

  regForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private _route:Router, private _authService: AuthService) { }


  onSubmit() {
    const userData = this.regForm.value;
    console.log(userData)

    this._authService.register(userData).subscribe({
      error: (e) => console.error('error', this.requestError = e.error),
      complete: () => this._route.navigate(['/', 'login'])
    })    
  }
}
