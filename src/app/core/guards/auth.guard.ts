import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../modules/auth/services/auth.service';
import { RoutesKeys } from 'src/app/shared/ts/routes-keys.enum';

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
            this._route.navigate([`${RoutesKeys.Login}`]);
          }
        }),
      );
  }
}



// import { inject } from "@angular/core";
// import { Router } from "@angular/router";
// import { tap } from "rxjs";
// import { AuthService } from "src/app/modules/auth/services/auth.service";

// export const authGuard = () => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   return authService.isLoggedIn$
//     .pipe(
//       tap(isLoggedIn => {
//         if (!isLoggedIn) {
//           router.navigate(['login']);
//         }
//       }),
//     );
// }