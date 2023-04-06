import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Row } from '../row.class';

@Component({
  selector: 'app-input-color-row',
  templateUrl: './input-color-row.component.html',
  styleUrls: ['../row.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputColorRowComponent extends Row  {}
