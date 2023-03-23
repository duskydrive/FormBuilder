import { Injectable } from '@angular/core';

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
        height: 50,
        required: false,
        borderStyle: 'solid', 
        fontSize: 14,
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
        fontSize: 14,
        fontWeight: 400,
        color: '#000000',
      },
      {
        type: 'button',
        placeholderText: 'Btn text',
        width: 100,
        height: 50,
        required: false,
        borderStyle: 'solid', 
        fontSize: 14,
        fontWeight: 400,
        color: '#fff',
        backgroundColor: '#3f51b5',
      },
      {
        type: 'checkbox',
        placeholderText: 'Placeholder',
        width: 100,
        height: 50,
        required: false,
        borderStyle: 'solid', 
        fontSize: 14,
        fontWeight: 400,
        color: '#000000',
      },
      {
        type: 'select',
        placeholderText: 'Placeholder',
        width: 100,
        height: 50,
        required: false,
        borderStyle: 'solid', 
        fontSize: 14,
        fontWeight: 400,
        color: '#000000',
      },
    ]
  }
}
