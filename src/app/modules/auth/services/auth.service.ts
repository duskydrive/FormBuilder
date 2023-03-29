import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  tap, 
  BehaviorSubject 
} from 'rxjs';
import { UserData } from 'src/app/shared/service/interfaces';
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
  
  register(data: UserData) {
    return this._http.post(this.apiUrl + 'register', { email: data.email, password: data.password })
  }
  
  login(data: UserData) {
    return this._http.post(this.apiUrl + 'login', { email: data.email, password: data.password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('jwt_auth_token', response.accessToken);
        })
      );
  }

  logout() {
    localStorage.removeItem('jwt_auth_token')
  }
  
}
