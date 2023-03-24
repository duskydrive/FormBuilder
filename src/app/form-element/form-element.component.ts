import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectFormElement } from '../state/formbuilder/formbuilder.actions';
import { FormElement } from '../service/interfaces';
import { AccordionManipulatorService } from '../service/accordion-manipulator.service';
@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.sass']
})
export class FormElementComponent {
  @Input() element!: FormElement;
  @Input() isDisabled!: boolean;
  
  constructor(private store: Store<AppState>, public changeAccordion: AccordionManipulatorService) {}

  selectElement() {
    this.store.dispatch(selectFormElement({element: this.element}))
    this.changeAccordion.callToggle.next( true );
  }
}