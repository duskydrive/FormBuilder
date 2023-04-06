import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Row } from '../row.class';

@Component({
  selector: 'app-input-checkbox-row',
  templateUrl: './input-checkbox-row.component.html',
  styleUrls: ['../row.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCheckboxRowComponent  extends Row {}
