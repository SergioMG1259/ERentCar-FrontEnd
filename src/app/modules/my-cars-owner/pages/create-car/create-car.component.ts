import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormValidationStepperService } from 'src/app/core/services/form-validation-stepper.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit,OnDestroy  {
  subscriptionFormBasicInfo?:Subscription 
  subscriptionFormLocation?:Subscription
  subscribtionFormFeatures?:Subscription

  formBasicInfo:boolean=false
  formLocation:boolean=false
  formFeature:boolean=false

  constructor(private formService:FormValidationStepperService) {
  }

  ngOnInit(): void {
    //comunicar el formulario del componente basic info con los botones de este componente
    this.subscriptionFormBasicInfo=this.formService.getFormValid(0).subscribe(result=>{
      this.formBasicInfo=result
    })
    this.subscriptionFormLocation=this.formService.getFormValid(2).subscribe(result=>{
      this.formLocation=result
    })
    this.subscriptionFormLocation=this.formService.getFormValid(1).subscribe(result=>{
      this.formFeature=result
    })
  }

  ngOnDestroy(): void {
    if(this.subscriptionFormBasicInfo){
      this.subscriptionFormBasicInfo.unsubscribe()
    }
    if(this.subscriptionFormLocation){
      this.subscriptionFormLocation.unsubscribe()
    }
    if(this.subscribtionFormFeatures){
      this.subscribtionFormFeatures.unsubscribe()
    }
  }

}
