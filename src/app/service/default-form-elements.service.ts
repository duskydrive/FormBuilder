import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultFormElementsService {
  get() {
    return [
      {
        id: '',
        type: 'input',
        placeholderText: 'Input placeholder',
        width: 100,
        height: 50,
        required: false,
        borderWidth: '1',
        borderColor: '#cccccc',
        borderStyle: 'solid', 
        fontSize: 14,
        fontWeight: 400,
        color: '#000000',
      },
      {
        id: '',
        type: 'textarea',
        placeholderText: 'Text placeholder',
        width: 100,
        height: 100,
        required: false,
        borderWidth: '1',
        borderColor: '#cccccc',
        borderStyle: 'solid', 
        fontSize: 14,
        fontWeight: 400,
        color: '#000000',
      },
      {
        id: '',
        type: 'button',
        placeholderText: 'Btn text',
        width: 100,
        height: 50,
        borderWidth: '1',
        borderColor: '#cccccc',
        borderStyle: 'solid', 
        fontSize: 14,
        fontWeight: 400,
        color: '#fff',
        backgroundColor: '#3f51b5',
      },
      {
        id: '',
        type: 'checkbox',
        placeholderText: 'Placeholder',
        width: 15,
        required: false,
        fontSize: 14,
        fontWeight: 400,
        color: '#000000',
      },
      {
        id: '',
        type: 'select',
        placeholderText: 'Select your option',
        width: 100,
        height: 50,
        borderWidth: '1',
        borderColor: '#cccccc',
        borderStyle: 'solid', 
        fontSize: 14,
        fontWeight: 400,
        color: '#000000',
        options: [],
      },
    ]
  }
}
