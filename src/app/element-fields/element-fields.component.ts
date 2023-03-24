import { Component, Input } from '@angular/core';
import { FormElement } from '../ts/interfaces';

@Component({
  selector: 'app-element-fields',
  templateUrl: './element-fields.component.html',
  styleUrls: ['./element-fields.component.sass']
})
export class ElementFieldsComponent {
  @Input() element!: FormElement;
}
