import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectOptionsService {
  getBorderStyles() {
    return ['dotted', 'dashed', 'solid', 'double', 'groove'];
  }
  getFontWeights() {
    return [200, 400, 500, 600];
  }
}
