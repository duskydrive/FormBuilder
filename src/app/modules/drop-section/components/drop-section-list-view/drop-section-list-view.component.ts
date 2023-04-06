import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormElement } from 'src/app/shared/ts/interfaces';

@Component({
  selector: 'app-drop-section-list-view',
  templateUrl: './drop-section-list-view.component.html',
  styleUrls: ['./drop-section-list-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropSectionListViewComponent {
  @Input() items!: FormElement[] | null
}
