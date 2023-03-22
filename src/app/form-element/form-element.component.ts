import { Component, Input, AfterViewInit} from '@angular/core';
import { FormElement } from '../ts/interfaces';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.sass']
})
export class FormElementComponent implements AfterViewInit{
  @Input() element!: FormElement;
  @Input() isDisabled!: boolean;
  // constructor() {
    
    // }
  ngAfterViewInit() {
    console.log(this.isDisabled)
  }

  
}
