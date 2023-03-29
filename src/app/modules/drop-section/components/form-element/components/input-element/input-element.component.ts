import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormElementStandard } from '../form-element-standard.class';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputElementComponent extends FormElementStandard {
  constructor() {
    super()
  }
}
