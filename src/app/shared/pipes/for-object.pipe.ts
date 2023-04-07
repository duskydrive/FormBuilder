import { PipeTransform, Pipe } from '@angular/core';

/**
 * Transform a literal object into array
 */
@Pipe({
  name: 'forObject',
  pure: true,
})
export class ForObjectPipe implements PipeTransform {

  transform(object: any, args?: any): any {
    return Object.entries(object);
  }
}