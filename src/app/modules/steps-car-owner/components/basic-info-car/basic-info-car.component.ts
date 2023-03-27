import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { ClickOutService } from 'src/app/core/services/click-out.service';
import { DictionayBrandModel } from 'src/app/core/dictionary/dictionary-brand-model';
import { FadeIn } from 'src/app/core/animations/fade-in';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationStepperService } from 'src/app/core/services/form-validation-stepper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-info-car',
  templateUrl: './basic-info-car.component.html',
  styleUrls: ['./basic-info-car.component.css'],
  animations: [FadeIn(800)]
})
export class BasicInfoCarComponent implements OnInit,OnDestroy {
  @Input() isForUpdate:boolean=true

  subscribtionForm!:Subscription

  dictionayBrandModel:DictionayBrandModel=new DictionayBrandModel()
  modelsCar:string[]=this.dictionayBrandModel.returnModels('Toyota')
  modelSelect:string=this.modelsCar[0]

  fuelOption:string="Petrol"
  gearboxOption:string="Automatic"
  moneyOption:string="PEN"
  addWheelchair:boolean=false
  addChildSeat:boolean=false

  basicInfoForm=new FormGroup({
    plateNumber:new FormControl('',Validators.required),
    mileage:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    brand:new FormControl('Toyota',Validators.required),
    model:new FormControl('Crown',Validators.required),
    type:new FormControl('Car',Validators.required),
    seat:new FormControl('5',Validators.required),
    year:new FormControl('2023',Validators.required)
  })
  @HostBinding('@fadeIn') arcAnimation() {}
  constructor(private clickOutService:ClickOutService,private formService:FormValidationStepperService) {
    this.modelSelect=this.modelsCar[0]
  }

  changeModel(brand:string){
    const models=this.dictionayBrandModel.returnModels(brand)
    //this.brandSelect=brand
    if(models!=this.modelsCar){
      this.modelsCar=models
      //this.modelSelect=""
      //this.modelControl.setValue('')
    }
  }
  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this.clickOutService.documentClickedTarget.next(event.target);
    /*aqui si emite un elemento html para cerrar los select*/
  }

  get plateNumberControl(){
    return this.basicInfoForm.get('plateNumber') as FormControl;
  }
  get mileageControl(){
    return this.basicInfoForm.get('mileage') as FormControl;
  }
  get priceControl(){
    return this.basicInfoForm.get('price') as FormControl;
  }
  get descriptionControl(){
    return this.basicInfoForm.get('description') as FormControl;
  }
  get brandControl(){
    return this.basicInfoForm.get('brand') as FormControl;
  }
  get modelControl(){
    return this.basicInfoForm.get('model') as FormControl;
  }
  get typeControl(){
    return this.basicInfoForm.get('type') as FormControl;
  }
  get seatControl(){
    return this.basicInfoForm.get('seat') as FormControl;
  }
  get yearControl(){
    return this.basicInfoForm.get('year') as FormControl;
  }

  ngOnInit(): void {
    if(this.isForUpdate==false){
      this.subscribtionForm=this.basicInfoForm.statusChanges.subscribe(result=>{
        if(result=='INVALID'){
          this.formService.setFormValid(0,false)
        }
        else{
          this.formService.setFormValid(0,true)
        }
      })
    }
  }
  ngOnDestroy(): void {
    if(this.subscribtionForm){
      // this.formService.ngOnDestroy(0) 
      this.formService.setFormValid(0,false)//se queda en true al destruir el componente
      this.subscribtionForm.unsubscribe()
    }
  }
}