import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { map } from 'rxjs';
import { throwError } from 'rxjs';
interface User {
  id: string,
  username: string,
  password: string,
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _http:HttpClient) { 

  }

  apiurl='http://localhost:3000/';

  register(val: any) {
    return this._http.post(this.apiurl + 'register', { email: val.email, password: val.password })
  }

  login(val: any) {
    return this._http.post(this.apiurl + 'login', { email: val.email, password: val.password });
  }

  
}
