import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private _http:HttpClient, private _route:Router, private authService: AuthService) { }

  result: any;


  onSubmit() {
    if (this.loginForm.valid) {
      const val = this.loginForm.value;
      if (val.email && val.password) {
          this.authService.login(val)
              .subscribe((response) => {
                this._route.navigate(['']);
              }
                // change to next error complete
                  // data => console.log('success', data),
                  // error => console.log('oops', error)
                  // (res) => {
                    // console.log(typeof res)
                    
                      // console.log("User is logged in");
                      // this._route.navigateByUrl('/');
                  // }
              );
      }
    } 
  }
}
