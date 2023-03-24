import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectCurrentElement } from '../state/formbuilder/formBuilder.selectors';
import { updateFormElement } from '../state/formbuilder/formbuilder.actions';
interface Field {
  elementId: string, 
  key: string, 
  val: string
}
@Component({
  selector: 'app-element-fields',
  templateUrl: './element-fields.component.html',
  styleUrls: ['./element-fields.component.sass']
})
export class ElementFieldsComponent {
  element = this.store.select(selectCurrentElement);

  constructor(private store: Store<AppState>) {}

  changeField(obj: Field) {
    this.store.dispatch(updateFormElement(obj))
  }

}
