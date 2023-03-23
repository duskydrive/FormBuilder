import { Injectable } from '@angular/core';
import { FormElement } from '../ts/interfaces';
import { CdkDragDrop, copyArrayItem, transferArrayItem, CdkDragExit, moveItemInArray
} from '@angular/cdk/drag-drop';
import { addFormElement, swapFormElements } from '../state/formbuilder/formbuilder.actions';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  constructor(private store: Store<any>) { }

  transferringItem: FormElement | undefined = undefined;

  drop(event: CdkDragDrop<FormElement[]>) {
  // drop(event: any) {
    console.log(event)

    // if (event.previousContainer == event.container) {
    //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    // }
    
    if (event.previousContainer == event.container && event.container.id === 'formElements') {
      //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    if (event.previousContainer == event.container && event.container.id === 'doneList') {
      console.log('here')
      console.log(event.previousIndex)
      this.store.dispatch(swapFormElements({ index1: event.previousIndex, index2: event.currentIndex }))
      
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    if (event.previousContainer.id !== event.container.id) {
      // console.log('onDrop event item data')
      // console.log(event.item.data)
      this.store.dispatch(addFormElement({ element: event.item.data, index: event.currentIndex }))
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
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
