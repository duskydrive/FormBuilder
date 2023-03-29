import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DesignField } from '../design-field.class';

@Component({
  selector: 'app-standard-field',
  templateUrl: './standard-field.component.html',
  styleUrls: ['./standard-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardFieldComponent extends DesignField {
  constructor() {
    super()
  }
}
