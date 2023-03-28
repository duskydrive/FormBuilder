import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, takeUntil, tap } from 'rxjs';
import { AuthService } from './service/auth.service';
import { Unsub } from './service/unsub.class';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard extends Unsub implements CanActivate {
  constructor(private authService: AuthService, private _route: Router) {
    super()
  }
  canActivate() {
    return this.authService.isLoggedIn$
      .pipe(
        tap(isLoggedIn => {
          if (!isLoggedIn) {
            this._route.navigate(['login']);
          }
        }),
        takeUntil(this.unsubscribe$)
      );
  }
  
}
