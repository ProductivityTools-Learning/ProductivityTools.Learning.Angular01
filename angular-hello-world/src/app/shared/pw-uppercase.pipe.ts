import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pwUppercase'
})
export class PwUppercasePipe implements PipeTransform {

  transform(value: string): string {
    var result=value.toUpperCase()
    console.log(result);
    
    return result;
  }

}
