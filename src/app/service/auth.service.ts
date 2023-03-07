import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, BehaviorSubject } from 'rxjs';
interface User {
  id: string,
  username: string,
  password: string,
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private _http:HttpClient) { 
    const token = localStorage.getItem('jwt_auth_token');
    this._isLoggedIn$.next(!!token);
  }

  apiurl='http://localhost:3000/';

  register(val: any) {
    return this._http.post(this.apiurl + 'register', { email: val.email, password: val.password })
  }

  login(val: any) {
    return this._http.post(this.apiurl + 'login', { email: val.email, password: val.password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('jwt_auth_token', response.accessToken);
          this._isLoggedIn$.next(true);
        })
      );
  }

  
}
