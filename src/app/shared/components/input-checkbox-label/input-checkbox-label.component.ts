import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HtmlComponent } from '../html-component.class';

@Component({
  selector: 'app-input-checkbox-label',
  templateUrl: './input-checkbox-label.component.html',
  styleUrls: ['./input-checkbox-label.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCheckboxLabelComponent),
    multi: true
  }]

})
export class InputCheckboxLabelComponent extends HtmlComponent {

}
