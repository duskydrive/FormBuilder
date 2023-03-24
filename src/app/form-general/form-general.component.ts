import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectGeneralForm } from '../state/formbuilder/formBuilder.selectors';
import { updateGeneralForm } from '../state/formbuilder/formbuilder.actions';

interface Test {
  key: string, 
  val: string,
}

@Component({
  selector: 'app-form-general',
  templateUrl: './form-general.component.html',
  styleUrls: ['./form-general.component.sass']
})
export class FormGeneralComponent {
  formStyles = this.store.select(selectGeneralForm);

  constructor(private store: Store<AppState>) {}

  changeGeneral(obj: Test) {
    this.store.dispatch(updateGeneralForm(obj))
  }

}
