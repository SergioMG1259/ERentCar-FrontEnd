import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCarsOwnerRoutingModule } from './my-cars-owner-routing.module';
import { MyCarsComponent } from './pages/my-cars/my-cars.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyCarDetailComponent } from './pages/my-car-detail/my-car-detail.component';
import { StepsCarOwnerModule } from '../steps-car-owner/steps-car-owner.module';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepComponent } from './components/step/step.component';
import { stepperNextDirective,NbStepperPreviousDirective } from './components/stepper-button.directive';


@NgModule({
  declarations: [
    MyCarsComponent,
    MyCarDetailComponent,
    CreateCarComponent,
    StepperComponent,
    StepComponent,
    stepperNextDirective,
    NbStepperPreviousDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    StepsCarOwnerModule,
    MyCarsOwnerRoutingModule
  ]
})
export class MyCarsOwnerModule { }
