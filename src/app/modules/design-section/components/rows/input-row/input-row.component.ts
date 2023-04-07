import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Row } from '../row.class';

@Component({
  selector: 'app-input-row',
  templateUrl: './input-row.component.html',
  styleUrls: ['../row.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputRowComponent extends Row {

}
