import { 
  ChangeDetectionStrategy, 
  Component,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/state/app.state';
import { selectGeneralForm } from 'src/app/shared/state/formbuilder/formBuilder.selectors';

@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DropSectionComponent {
  formStyles = this.store.select(selectGeneralForm);

  constructor(
    private store: Store<AppState>,
  ) {}

  
}
