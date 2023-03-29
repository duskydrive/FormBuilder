import { 
  ChangeDetectionStrategy, 
  Component 
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/state/app.state';
import { selectGeneralForm } from 'src/app/shared/state/formbuilder/formBuilder.selectors';
import { updateGeneralForm } from 'src/app/shared/state/formbuilder/formbuilder.actions';
import { KeyValuePair } from 'src/app/service/interfaces';

@Component({
  selector: 'app-form-general',
  templateUrl: './form-general.component.html',
  styleUrls: ['./form-general.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormGeneralComponent {
  formStyles = this.store.select(selectGeneralForm);

  constructor(private store: Store<AppState>) {}

  changeGeneral(obj: KeyValuePair) {
    this.store.dispatch(updateGeneralForm(obj))
  }
}
