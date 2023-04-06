import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormElementStandard } from '../form-element-standard.class';

@Component({
  selector: 'app-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonElementComponent extends FormElementStandard {
  constructor() {
    super()
  }
}
