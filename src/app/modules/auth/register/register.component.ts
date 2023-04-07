import { 
  ChangeDetectionStrategy, 
  Component, 
  OnDestroy,
  NgZone,
} from '@angular/core';
import { 
  FormGroup, 
  FormControl, 
  Validators 
} from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserData } from 'src/app/shared/ts/interfaces';
import { Unsub } from 'src/app/shared/service/unsub.class';
import { RoutesKeys } from 'src/app/shared/ts/routes-keys.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegisterComponent extends Unsub implements OnDestroy {
  requestError = '';
  // text for submit btn in view component
  btnText = 'Register';
  // text for url to register
  urlTitle = 'Sign In';
  // register url router link
  routeUrl = '/login';

  regForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(
    private _route:Router, 
    private _authService: AuthService,
    private ngZone: NgZone,
  ) {
    super()
  }

  onSubmit() {
    const userData: UserData = {
      email: this.regForm.value.email,
      username: this.regForm.value.username,
      password: this.regForm.value.password,
    }

    this.ngZone.run(() => {
      this._authService.register(userData)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe({
          next: (res) => console.log(res),
          error: (e) => this.requestError = e.error,
          complete: () => this._route.navigate([`${RoutesKeys.Login}`]),
        })    
    })
  }
}
