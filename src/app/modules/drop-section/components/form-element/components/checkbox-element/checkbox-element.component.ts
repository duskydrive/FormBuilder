import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormElementStandard } from '../form-element-standard.class';

@Component({
  selector: 'app-checkbox-element',
  templateUrl: './checkbox-element.component.html',
  styleUrls: ['./checkbox-element.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxElementComponent extends FormElementStandard {
  constructor() {
    super()
  }
}
