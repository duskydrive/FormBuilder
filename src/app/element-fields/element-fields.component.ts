import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectCurrentElement } from '../state/formbuilder/formBuilder.selectors';
import { updateFormElement } from '../state/formbuilder/formbuilder.actions';
import { updateCurrentElement } from '../state/formbuilder/formbuilder.actions';
import { 
  addOption, 
  addOptionToCurrentElement, 
  removeOption, 
  removeOptionFromCurrentElement,
  removeFormElement,
  removeCurrentElement,
} from '../state/formbuilder/formbuilder.actions';
interface Field {
  elementId: string, 
  key: string, 
  val: string
}

interface Option {
  selectId: string, 
  content: string
}
@Component({
  selector: 'app-element-fields',
  templateUrl: './element-fields.component.html',
  styleUrls: ['./element-fields.component.sass']
})
export class ElementFieldsComponent {
  @ViewChild('option') optionInput!: ElementRef;

  element$ = this.store.select(selectCurrentElement);

  constructor(private store: Store<AppState>) {
    this.element$.subscribe((res) => {
      console.log(res)
    })
  }
  
  changeField(obj: Field) {
    this.store.dispatch(updateFormElement(obj))
    this.store.dispatch(updateCurrentElement(obj))
  }

  addOption(selectId: string, value: string) {
    // при рефакторинге перекинь создание айди опции в редюсер addOption 
    // options: item.options?.concat({id: Date.now().toString(), content}),
    const id = Date.now().toString();

    this.store.dispatch(addOption({selectId, content: {id: id, content: value}}));
    this.store.dispatch(addOptionToCurrentElement({ data: {id: id, content: value} }));
    this.optionInput.nativeElement.value = '';
  }

  removeOption(selectId: string, optionId: string) {
    this.store.dispatch(removeOption({selectId, optionId }));
    this.store.dispatch(removeOptionFromCurrentElement({ optionId }));
  }

  removeElement(id: string) {
    this.store.dispatch(removeFormElement({ id }));
    this.store.dispatch(removeCurrentElement());
  }
 

}
