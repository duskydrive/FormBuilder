import { Component } from '@angular/core';
import {CdkDragDrop, copyArrayItem, CdkDragExit} from '@angular/cdk/drag-drop';
import { FormElement } from '../ts/interfaces';
import { DragdropService } from '../service/dragdrop.service';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent {
  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  elements: FormElement[] = [];


  // drop(event: CdkDragDrop<FormElement[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
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

  constructor(private dragService: DragdropService) {

  }

  onDrop(event: CdkDragDrop<FormElement[]>) {
    this.dragService.drop(event);
    // if (index?.action === 'splice') {
      // this.elements.splice(index.index, 1)
    // }
  }

  selectElement(el: FormElement) {
    console.log(el)
  }
}
