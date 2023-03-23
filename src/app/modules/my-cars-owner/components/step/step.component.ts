import { Component, Inject, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { MY_STEPPER } from '../stepper-token';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit{
  protected stepper!:StepperComponent
  @Input()title:string='Nothing'
  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<any>;
  @Input() label!: string|TemplateRef<any>;

  constructor(@Inject(MY_STEPPER) public stpp:any) {
    this.stepper=stpp
  }
  get isLabelTemplate(): boolean {
    return this.label instanceof TemplateRef;
  }
  select(): void {
    this.stepper.selected = this;
  }

  ngOnInit(): void {
  }

}
