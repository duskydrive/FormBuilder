import { Component } from '@angular/core';
import {CdkDragDrop, CdkDragExit, copyArrayItem} from '@angular/cdk/drag-drop';
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
  
  constructor (private formElements: DefaultFormElementsService, public dragService: DragdropService ) {
    
  }

  onDrop(event: CdkDragDrop<FormElement[]>) {
    this.dragService.drop(event);
  }
  
  // drop(event: CdkDragDrop<FormElement[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     copyArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }

  // transferringItem: FormElement | undefined = undefined;

  // drop(event: CdkDragDrop<FormElement[]>) {
  //   if (event.previousContainer.id !== event.container.id) {
  //   copyArrayItem(
  //     event.previousContainer.data,
  //     event.container.data,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  //   }

  //   this.transferringItem = undefined;
  // }

  // entered() {
  //   this.transferringItem = undefined;
  // }

  // exited(e: CdkDragExit<any>) {
  //   this.transferringItem = e.item.data;
  // }
  
}
