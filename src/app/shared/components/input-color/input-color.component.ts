import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HtmlComponent } from '../html-component.class';

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputColorComponent),
    multi: true
  }]
})
export class InputColorComponent extends HtmlComponent {


}