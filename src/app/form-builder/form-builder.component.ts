import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormElement } from '../ts/interfaces';
import { DragdropService } from '../service/dragdrop.service';
import { selectFormElements } from '../state/formbuilder/formBuilder.selectors';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectGeneralForm } from '../state/formbuilder/formBuilder.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent {
  formStyles = this.store.select(selectGeneralForm);
  elements$ = this.store.select(selectFormElements)
  disableBool = false;
  
  
  constructor(public dragService: DragdropService, private store: Store<AppState>) {}

  onDrop(event: CdkDragDrop<Observable<FormElement[]>>) {
      this.dragService.drop(event);
  }

  selectElement(el: FormElement) {
    console.log(el)
  }
}
