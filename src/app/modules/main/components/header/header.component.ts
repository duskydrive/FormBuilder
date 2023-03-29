import { 
  ChangeDetectionStrategy, 
  Component 
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AppState } from 'src/app/shared/state/app.state';
import { Store } from '@ngrx/store';
import { resetState } from 'src/app/shared/state/formbuilder/formbuilder.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent {
  constructor(
    private _route:Router, 
    private _authService: AuthService, 
    private store: Store<AppState>
  ) {}

  exitApp() {
    this._authService.logout()
    this.store.dispatch(resetState())
    this._route.navigate(['login'])
  }
}
