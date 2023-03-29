import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormElementStandard } from '../form-element-standard.class';

@Component({
  selector: 'app-textarea-element',
  templateUrl: './textarea-element.component.html',
  styleUrls: ['./textarea-element.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaElementComponent extends FormElementStandard {
  constructor() {
    super()
  }
}

