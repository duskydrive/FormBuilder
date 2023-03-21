import { Component, Input} from '@angular/core';
import { FormElement } from '../ts/interfaces';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.sass']
})
export class FormElementComponent {
  @Input() element!: FormElement;
  // constructor() {

  // }

  
}
