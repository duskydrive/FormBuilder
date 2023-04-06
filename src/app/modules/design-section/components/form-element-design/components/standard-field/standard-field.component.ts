import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectOptionsService } from '../../../services/select-options.service';
import { DesignField } from '../design-field.class';

@Component({
  selector: 'app-standard-field',
  templateUrl: './standard-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardFieldComponent extends DesignField {
  constructor(public optionsService: SelectOptionsService) {
    super(optionsService)
  }
}
