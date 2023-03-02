import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyButton]'
})
export class MyButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'my-button';
  }
  constructor() { }

}
