import { 
  ChangeDetectionStrategy, 
  Component 
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectGeneralForm } from '../state/formbuilder/formBuilder.selectors';
import { updateGeneralForm } from '../state/formbuilder/formbuilder.actions';
import { KeyValuePair } from '../service/interfaces';

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
