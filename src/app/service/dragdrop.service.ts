import { Injectable } from '@angular/core';
import { FormElement } from '../ts/interfaces';
import { CdkDragDrop, copyArrayItem, CdkDragExit, moveItemInArray
} from '@angular/cdk/drag-drop';
@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  // constructor() { }

  transferringItem: FormElement | undefined = undefined;

  drop(event: CdkDragDrop<FormElement[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    if (event.previousContainer.id !== event.container.id) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.transferringItem = undefined;
  }

  entered(event: any) {
    this.transferringItem = undefined;
  }

  enterPredicate() {
    return false
  }

  exited(e: CdkDragExit<any>) {
    this.transferringItem = e.item.data;
  }

}
