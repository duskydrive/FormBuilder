import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendElementIdService {

  element = new BehaviorSubject<string | undefined>(undefined);
  share = this.element.asObservable();

  passId(id: string) {
    this.element.next(id);
  }
  
}
