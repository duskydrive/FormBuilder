import { 
  ChangeDetectionStrategy, 
  Component 
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/state/app.state';
import { selectGeneralForm } from 'src/app/shared/state/formbuilder/formBuilder.selectors';
import { updateGeneralForm } from 'src/app/shared/state/formbuilder/formbuilder.actions';
import { KeyValuePair } from 'src/app/shared/ts/interfaces';
import { SelectOptionsService } from '../services/select-options.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-form-general-design',
  templateUrl: './form-general-design.component.html',
  styleUrls: ['./form-general-design.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormGeneralDesignComponent {
  formStyles = this.store.select(selectGeneralForm);
  borderStylesOptions$: Observable<string[]> = of(this.optionsService.getBorderStyles());
  fontWeightOptions$: Observable<number[]> = of(this.optionsService.getFontWeights());

  constructor(
    private store: Store<AppState>,
    private optionsService: SelectOptionsService,
  ) {}

  changeGeneral(obj: KeyValuePair) {
    this.store.dispatch(updateGeneralForm(obj))
  }
}
