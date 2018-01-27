import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'int'
})
export class IntPipe implements PipeTransform {
  transform(value: any, args?: any): number {
    return parseInt(value, 10);
  }
}
