import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private _route: Router) {}

  canActivate() {
    return this.authService.isLoggedIn$
      .pipe(
        tap(isLoggedIn => {
          if (!isLoggedIn) {
            this._route.navigate(['login']);
          }
        }),
      );
  }
}