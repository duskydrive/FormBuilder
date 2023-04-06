import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormElement } from 'src/app/shared/service/interfaces';
@Component({
  selector: 'app-drag-section-list-view',
  templateUrl: './drag-section-list-view.component.html',
  styleUrls: ['./drag-section-list-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragSectionListViewComponent {
  @Input() items: FormElement[] | null = [];
}
