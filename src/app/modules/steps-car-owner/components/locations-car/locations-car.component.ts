import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FadeIn } from 'src/app/core/animations/fade-in';
import { FormValidationStepperService } from 'src/app/core/services/form-validation-stepper.service';

@Component({
  selector: 'app-locations-car',
  templateUrl: './locations-car.component.html',
  styleUrls: ['./locations-car.component.css'],
  animations: [FadeIn(800)]
})
export class LocationsCarComponent implements OnInit {
  @Input() isForUpdate:boolean=true
  
  locationsValue:string[]=[]
  locationsValueHttp:string[]=['Pacasmayo','San Pedro']
  differentValueFromHttp:boolean=false
  addBoolean:number=0

  locationsForm=new FormGroup({
    locations:new FormArray([])
  })
  formLocationSubscription?:Subscription
  formLocationSubscriptionValid?:Subscription

  @HostBinding('@fadeIn') arcAnimation() {}

  constructor(private formService:FormValidationStepperService) { }

  getLocations():FormArray{
    return this.locationsForm.get('locations') as FormArray
  }
  clickAddLocationRow(){
    this.getLocations().push(new FormControl('',Validators.required));
  }
  clickDeleteLocationRow(i:number){
    this.getLocations().removeAt(i)
  }
  diferrentInHTTP(array:any){
    if(array.locations.length!=this.locationsValue.length){
      return true
    }
    for(let i=0;i<array.locations.length;i++){
      if(array.locations[i]!=this.locationsValue[i]){ //hay alguno diferente
        return true //son disintos
      }
    }
    return false
  }
  ngOnInit(): void {
    if(this.isForUpdate){
      for(let i=0;i<this.locationsValueHttp.length;i++){
        this.locationsValue.push(this.locationsValueHttp[i]) //locationsValue es solo para almacenar la respuesta http
         this.getLocations().push(new FormControl(this.locationsValue[i],Validators.required));
      }
      this.formLocationSubscription= this.locationsForm.valueChanges.subscribe(value=>{
        this.differentValueFromHttp=this.diferrentInHTTP(value)
      })
    }else{
      this.formLocationSubscriptionValid=this.locationsForm.statusChanges.subscribe(result=>{
        if(result=='INVALID'){
          this.formService.setFormValid(2,false)
        }else{
          this.formService.setFormValid(2,true)
        }
    })
    }
  }
  ngOnDestroy(){
    if(this.formLocationSubscription!=null){
      // this.formService.setFormValid(0,false)
      this.formLocationSubscription.unsubscribe()
    }
    if(this.formLocationSubscriptionValid){
      this.formService.setFormValid(2,false)
      this.formLocationSubscriptionValid.unsubscribe()
    }
  }

}
