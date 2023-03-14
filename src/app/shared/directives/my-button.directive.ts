import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMyButton]'
})
export class MyButtonDirective {

  @HostBinding('class') get classes(): string {
    /*if(this.color=="cancel"){
      return 'my-button cancel';
    }*/
    return 'my-button';
  }
  @HostBinding('style.background-color')
  background:string|null=null
  @Input() set color(value:string|null){
    if(value=="cancel"){
      this.background="rgb(134, 15, 7)"
    }
    
  }
  constructor() { }

}
