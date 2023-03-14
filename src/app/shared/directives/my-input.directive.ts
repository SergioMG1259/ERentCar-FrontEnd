import { Directive,ElementRef, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appMyInput]'
})
export class MyInputDirective {

  @HostBinding('class') get classes(): string {
    return 'my-input';
  }
  constructor() { }

}
