import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignField } from '../design-field.class';

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFieldComponent extends DesignField {
  constructor() {
    super()
  }
}
