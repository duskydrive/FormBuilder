import { Injectable } from '@angular/core';
import { 
  CdkDragDrop, 
  CdkDragExit 
} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { FormElement } from '../ts/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { 
  addFormElement, 
  swapFormElements 
} from '../state/formbuilder/formbuilder.actions';
@Injectable({
  providedIn: 'root'
})

export class DragdropService {
  constructor(private store: Store<AppState>) {}

  transferringItem: FormElement | undefined = undefined;

  drop(event: CdkDragDrop<Observable<FormElement[]>>) {
    if (event.previousContainer == event.container && event.container.id === 'doneList') {
      this.store.dispatch(swapFormElements({ index1: event.previousIndex, index2: event.currentIndex }))      
    }

    if (event.previousContainer.id !== event.container.id) {
      this.store.dispatch(addFormElement({ element: event.item.data, index: event.currentIndex }))
    }

    this.transferringItem = undefined;
  }

  entered() {
    this.transferringItem = undefined;
  }

  enterPredicate() {
    return false
  }

  exited(e: CdkDragExit) {
    this.transferringItem = e.item.data;
  }
}
