import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, BehaviorSubject } from 'rxjs';

// interface UserData {
//   email: string | null | undefined,
//   password: string | null | undefined,
//   username?: string | null | undefined,
// }

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

  apiUrl='http://localhost:3000/';

  register(data: any) {
    return this._http.post(this.apiUrl + 'register', { email: data.email, password: data.password })
  }

  login(data: any) {
    return this._http.post(this.apiUrl + 'login', { email: data.email, password: data.password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('jwt_auth_token', response.accessToken);
          this._isLoggedIn$.next(true);
        })
      );
  }

  
}
