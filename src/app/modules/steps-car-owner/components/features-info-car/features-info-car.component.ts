import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { FadeIn } from 'src/app/core/animations/fade-in';
import { SelectionModel } from '@angular/cdk/collections';
import { Feature, features } from 'src/app/core/models/feature-array';
import { DictionayFeatureIcon } from 'src/app/core/dictionary/dictionary-feature-icon';
import { Subscription } from 'rxjs';
import { FormValidationStepperService } from 'src/app/core/services/form-validation-stepper.service';

@Component({
  selector: 'app-features-info-car',
  templateUrl: './features-info-car.component.html',
  styleUrls: ['./features-info-car.component.css'],
  animations: [FadeIn(800)]
})
export class FeaturesInfoCarComponent implements OnInit,OnDestroy {
  @Input() isForUpdate:boolean=true

  subForm?:Subscription

  formSameThatHttp:boolean=true
  features=features
  featuresHttp:Feature[]=[{name:'Bluetooth'},{name:'AC'},{name:'GPS'},{name:'Pet Friendly'}]
  dictionary:DictionayFeatureIcon=new DictionayFeatureIcon()

  selection=new SelectionModel<Feature>(
    true,
    
  )

  @HostBinding('@fadeIn') arcAnimation() {}
  constructor(private formService:FormValidationStepperService) { }
  
  existInFeatureHTTP(){
    // let count:number=0

    // for(let i=0;i<this.selection.selected.length;i++){
    //   for (let j = 0; j < this.featuresHttp.length; j++) {
    //     if(this.selection.selected[i].name==this.featuresHttp[j].name){
    //       count=count+1
    //       break
    //     }
    //   }
    // }
    // if(count==this.featuresHttp.length && count==this.selection.selected.length){
    //   this.formSameThatHttp=true
    // }
    // else{
    //   this.formSameThatHttp=false
    // }
    for(let i=0;i<this.selection.selected.length;i++){
      const selectedFeature=this.selection.selected[i].name
      const selectedFeatureHttp=this.featuresHttp.find((feature)=>selectedFeature==feature.name)
      if(!selectedFeatureHttp){
        return false
      }
    }
    return true
  }

  ngOnInit(): void {
    if(this.isForUpdate){
      for(let i=0;i<this.featuresHttp.length;i++){
        this.features.forEach(e => {
          e.name==this.featuresHttp[i].name?this.selection.select(e):''
        });
      }
    }
    this.subForm=this.selection.changed.subscribe(result=>{
      if(this.isForUpdate){
        if(this.featuresHttp.length==this.selection.selected.length){
          this.formSameThatHttp=this.existInFeatureHTTP()
        }else{
          this.formSameThatHttp=false
        }
      }
      else{
        if(this.selection.selected.length>=4){
          this.formService.setFormValid(1,true)
        }else{
          this.formService.setFormValid(1,false)
        }
      }
    })
  }
  ngOnDestroy(): void {
    if(this.subForm!=null){
      this.formService.setFormValid(1,false)
      this.subForm.unsubscribe()
    }
  }
}