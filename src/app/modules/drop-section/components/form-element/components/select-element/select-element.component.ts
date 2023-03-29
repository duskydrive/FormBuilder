import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SelectOption } from 'src/app/shared/service/interfaces';
import { FormElementStandard } from '../form-element-standard.class';

@Component({
  selector: 'app-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectElementComponent extends FormElementStandard {
  constructor() {
    super()
  }
  @Input() options: SelectOption[] = [];
}

