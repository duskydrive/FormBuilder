import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormElement } from '../service/interfaces';
import { DragdropService } from '../service/dragdrop.service';
import { AppState } from '../state/app.state';
import { selectGeneralForm, selectFormElements } from '../state/formbuilder/formBuilder.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormBuilderComponent {
  formStyles = this.store.select(selectGeneralForm);
  elements$ = this.store.select(selectFormElements)
  disableBool = false;
  
  constructor(
    public dragService: DragdropService,
    private store: Store<AppState>
  ) {}

  onDrop(event: CdkDragDrop<Observable<FormElement[]>>) {
      this.dragService.drop(event);
  }
}
