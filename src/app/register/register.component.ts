import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  regForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private _http:HttpClient, private _route:Router, private authService: AuthService) { }


  onSubmit() {
    const val = this.regForm.value;

    this.authService.register(val).subscribe((res) => {
      this._route.navigate(['/', 'login'])
    })
   

    
  }
}
