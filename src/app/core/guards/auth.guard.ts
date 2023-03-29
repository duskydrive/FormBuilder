import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs";
import { AuthService } from "src/app/modules/auth/services/auth.service";

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn$
    .pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          router.navigate(['login']);
        }
      }),
    );
}