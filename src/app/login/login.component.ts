import { 
  ChangeDetectionStrategy, 
  Component, 
  OnDestroy 
} from '@angular/core';
import { 
  FormGroup, 
  FormControl, 
  Validators 
} from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { UserData } from '../service/interfaces';
import { Unsub } from '../service/unsub.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent extends Unsub implements OnDestroy {
  requestError = '';
  // text for submit btn in view component
  btnText = 'Login';
  // text for url to register
  urlTitle = 'Register';
  // register url router link
  routeUrl = '/register';

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(
    private _route:Router, 
    private _authService: AuthService
  ) {
    super();
  }

  onSubmit() {
    const userData: UserData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

    this._authService.login(userData)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        error: (e) => this.requestError = e.error,
        complete: () => this._route.navigate([''])
      })             
  }
}
