import { Injectable } from '@angular/core';
import { FormElement } from '../ts/interfaces';
@Injectable({
  providedIn: 'root'
})
export class DefaultFormElementsService {

  // constructor() { }
  get() {
    return [
      {
        type: 'input',
        placeholderText: 'Input placeholder',
        width: 100,
        height: 30,
        required: false,
        borderStyle: 'solid', 
        fontSize: 16,
        fontWeight: 400,
        color: '#000000',
      },
      {
        type: 'textarea',
        placeholderText: 'Text placeholder',
        width: 100,
        height: 100,
        required: false,
        borderStyle: 'solid', 
        fontSize: 16,
        fontWeight: 400,
        color: '#000000',
      },
      {
        type: 'button',
        placeholderText: 'Btn text',
        width: 100,
        height: 30,
        required: false,
        borderStyle: 'solid', 
        fontSize: 16,
        fontWeight: 400,
        color: '#000000',
      },
      {
        type: 'checkbox',
        placeholderText: 'Placeholder',
        width: 100,
        height: 30,
        required: false,
        borderStyle: 'solid', 
        fontSize: 16,
        fontWeight: 400,
        color: '#000000',
      },

    ]
  }
}
