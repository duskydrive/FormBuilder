import { 
  ChangeDetectionStrategy, 
  Component,
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormElement } from 'src/app/service/interfaces';
import { DragdropService } from 'src/app/service/dragdrop.service';
import { AppState } from 'src/app/shared/state/app.state';
import { selectGeneralForm, selectFormElements, } from 'src/app/shared/state/formbuilder/formBuilder.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormBuilderComponent {
  formStyles = this.store.select(selectGeneralForm);
  elements$ = this.store.select(selectFormElements)

  constructor(
    public dragService: DragdropService,
    private store: Store<AppState>,
  ) {}

  onDrop(event: CdkDragDrop<Observable<FormElement[]>>) {
      this.dragService.drop(event);
  }
}
