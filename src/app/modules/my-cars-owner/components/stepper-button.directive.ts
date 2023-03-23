import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';

@Directive({
  selector: '[stepperNext]',
})
export class stepperNextDirective {

  @Input() @HostBinding('attr.type') type: string = 'submit';

  constructor(protected stepper: StepperComponent) {
  }

  @HostListener('click')
  onClick() {
    this.stepper.changeStep(1);
  }
}

@Directive({
  selector: '[stepperPrevious]',
})
export class NbStepperPreviousDirective {

  @Input() @HostBinding('attr.type') type: string = 'button';

  constructor(protected stepper: StepperComponent) {
  }

  @HostListener('click')
  onClick() {
    this.stepper.changeStep(-1);
  }
}
