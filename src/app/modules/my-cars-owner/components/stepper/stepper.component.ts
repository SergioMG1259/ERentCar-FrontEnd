import { Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { MY_STEPPER } from '../stepper-token';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{ provide: MY_STEPPER, useExisting: StepperComponent }],
})
export class StepperComponent implements OnInit {
  indexStep:number=0
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  constructor() { 

  }
  @Input()
  get selected() {
    if(this.steps){
      return this.steps.toArray()[this.indexStep]
    }
    return undefined 
  }
  set selected(step:any) {
    if (!this.steps) {
      return;
    }
    this.indexStep = this.steps.toArray().indexOf(step);
  }
  // getStepTemplate(step: StepComponent): TemplateRef<any> | null {
  //   if (step.isLabelTemplate) {
  //     return step.label as TemplateRef<any>;
  //   }
  //   return null;
  // }

  changeStep(i:number){
      this.indexStep+=i
  }

  ngOnInit(): void {
  }

}
