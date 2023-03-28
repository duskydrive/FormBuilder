import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { resetState } from '../state/formbuilder/formbuilder.actions';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(private _route:Router, private _authService: AuthService, private store: Store<AppState>) {}

  exitApp() {
    this._authService.logout()
    this.store.dispatch(resetState())
    this._route.navigate(['login'])
  }
}
