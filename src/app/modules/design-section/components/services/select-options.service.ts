import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectOptionsService {
  getBorderStyles() {
    return [
      {
        id: '1',
        content: 'dotted',
      },
      {
        id: '2',
        content: 'dashed',
      },
      {
        id: '3',
        content: 'solid',
      },
      {
        id: '4',
        content: 'double',
      },
      {
        id: '5',
        content: 'groove',
      },      
    ];
  }
  getFontWeights() {
    return [
      {
        id: '1',
        content: 200,
      },
      {
        id: '2',
        content: 400,
      },
      {
        id: '3',
        content: 500,
      },
      {
        id: '4',
        content: 600,
      },
    ]
  }
}
