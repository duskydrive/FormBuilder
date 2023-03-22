import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormElement } from '../ts/interfaces';
import { DefaultFormElementsService } from '../service/default-form-elements.service';
import { DragdropService } from '../service/dragdrop.service';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.sass']
})
export class FormElementsComponent {
  defaultElements: FormElement[] = this.formElements.get();
  disableBool = true;
  
  constructor (private formElements: DefaultFormElementsService, public dragService: DragdropService ) {
    
  }

  onDrop(event: CdkDragDrop<FormElement[]>) {
    this.dragService.drop(event);
  }
  
}
