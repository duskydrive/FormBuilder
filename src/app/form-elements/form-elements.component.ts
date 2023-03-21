import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormElement } from '../ts/interfaces';
import { DefaultFormElementsService } from '../service/default-form-elements.service';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.sass']
})
export class FormElementsComponent {
  done: FormElement[] = this.formElements.get();
  
  constructor (private formElements: DefaultFormElementsService ) {
    
  }
  
  drop(event: CdkDragDrop<FormElement[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
