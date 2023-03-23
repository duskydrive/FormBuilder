import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {CdkDragDrop, copyArrayItem, CdkDragExit} from '@angular/cdk/drag-drop';
import { FormElement } from '../ts/interfaces';
import { DragdropService } from '../service/dragdrop.service';
import { selectFormElements, selectGeneralForm } from '../state/formbuilder/formBuilder.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent {
  // elements: FormElement[] = [];
  // elements$: Observable<FormElement[]> = this.store.select(selectFormElements)
  elements$ = this.store.select(selectFormElements)
  disableBool = false;
  
  
  constructor(public dragService: DragdropService, private store: Store<any>) {
    // this.store.pipe(select(selectFormElements))
  }

  // onDrop(event: CdkDragDrop<FormElement[]>) {
  onDrop(event: any) {
      this.dragService.drop(event);
  }

  selectElement(el: FormElement) {
    console.log(el)
  }
}
