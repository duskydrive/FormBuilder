import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectOptionsService } from '../../../services/select-options.service';
import { DesignField } from '../design-field.class';

@Component({
  selector: 'app-standard-field',
  templateUrl: './standard-field.component.html',
  styleUrls: ['./standard-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardFieldComponent extends DesignField {
  constructor(public optionsService: SelectOptionsService) {
    super(optionsService)
  }
}
