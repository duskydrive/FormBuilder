import { Pipe, PipeTransform } from '@angular/core';
import { FormLabel
 } from '../ts/form-label.enum';

@Pipe({
  name: 'labelTransform'
})
export class LabelTransformPipe implements PipeTransform {


  transform(label: unknown, ...args: unknown[]): unknown {
    const match = Object.entries(FormLabel).find(
      ([key, value]) => {
        return key === label
      }
    );
    return match ? match[1] : label
  }

}
// 