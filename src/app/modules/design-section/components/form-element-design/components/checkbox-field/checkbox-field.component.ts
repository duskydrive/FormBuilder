import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectOptionsService } from '../../../services/select-options.service';
import { DesignField } from '../design-field.class';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxFieldComponent extends DesignField {
  constructor(public optionsService: SelectOptionsService) {
    super(optionsService)
  }
}
