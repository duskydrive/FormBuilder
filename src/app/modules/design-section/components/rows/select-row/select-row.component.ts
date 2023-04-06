import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Row } from '../row.class';

@Component({
  selector: 'app-select-row',
  templateUrl: './select-row.component.html',
  styleUrls: ['../row.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRowComponent extends Row {

}
