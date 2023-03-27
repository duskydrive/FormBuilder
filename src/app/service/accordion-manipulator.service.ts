import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormElement } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccordionManipulatorService {

  // constructor() { }

  callToggle = new Subject();

  element = new BehaviorSubject<string | undefined>(undefined);
  share = this.element.asObservable();
  // element = new Subject<FormElement | undefined>;

  passId(id: string) {
    this.element.next(id);
  }


}
