import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectOptionsService } from '../../../services/select-options.service';
import { DesignField } from '../design-field.class';

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFieldComponent extends DesignField {
  constructor(public optionsService: SelectOptionsService) {
    super(optionsService)
  }
}
