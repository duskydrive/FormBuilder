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
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private _http:HttpClient, private _route:Router, private service: AuthService) { }

  result: any;


  onSubmit() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value.username).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginForm.value.password) {
          alert('logged')
          // if (this.result.isactive) {
          //   // sessionStorage.setItem('username',this.result.id);
          //   // sessionStorage.setItem('role',this.result.role);
          //   // this.router.navigate(['']);
            
          // } else {
          //   alert()
          //   this.toastr.error('Please contact Admin', 'InActive User');
          // }
        } else {
          alert('whatever')
          // this.toastr.error('Invalid credentials');
        }
      });
    } else {
      alert('Please enter valid data.')
    }
    // console.log(this.loginForm.value)
    // if (this.loginForm.invalid) {
    //   return
    // } 

    // this._http.get<any>("http://localhost:3000/signup")
    // .subscribe(res=>{
    //   console.log(res)
    //   const user = res.find((a:any)=>{
    //     return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
    //   });

    //   if(user){
    //     alert('you are successfully loged in');
    //     // this.loginForm.reset();
    //     // $('.form-box').css('display','none');
    //     // this._route.navigate(['dashboard']);
    //   }else{
    //     alert('User Not Found');
    //     // this._route.navigate(['login']);
    //   }

    // })
   

    
  }
}
