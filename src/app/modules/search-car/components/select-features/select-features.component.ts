import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { trigger,style,transition,animate, state } from '@angular/animations';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ClickOutService } from 'src/app/core/services/click-out.service';
import { tap } from 'rxjs/operators';
import { DictionayFeatureIcon } from 'src/app/core/dictionary/dictionary-feature-icon';
import { Feature, features } from 'src/app/core/models/feature-array';
import { SelectionModel } from '@angular/cdk/collections';

interface FeatureSelect{
  feature:Feature
  selected:boolean
}

@Component({
  selector: 'app-select-features',
  templateUrl: './select-features.component.html',
  styleUrls: ['./select-features.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        state('void',style({
          transform:'translateY(-10px)',
          opacity:0,
        })),
        transition(':enter',[
          animate(200,style({
            transform:'translateY(0)',
            opacity:1
          }))
        ])
      ]
    )
  ]
})
export class SelectFeaturesComponent implements OnInit {
  @ViewChild('selectComponent',{ static: false }) selectComponent!: ElementRef;

  show:boolean=false
  features=features
  dictionary:DictionayFeatureIcon=new DictionayFeatureIcon()
  selection=new SelectionModel<Feature>(
    true,
    
  )


  clickMenuSubject$=new BehaviorSubject<boolean>(false);/*sujeto de bools que se activa al mostar las opciones*/
  clickMenu$:Observable<boolean>=this.clickMenuSubject$.asObservable();/*observable del sujeto de bools*/
  clickMenuSub!:Subscription /*subscripcion al observable de arriba*/
  clickSub:Subscription|null=null;/*subscripcion al servicio clickOut para poder desuscribirse luego*/
  constructor(private clickOutService:ClickOutService) { }
  
  clickShow(){
    this.clickMenuSubject$.next(!this.show)
  }
  clickSelect(feature:FeatureSelect){
    feature.selected=!feature.selected
  }
  documentClickListener(target: HTMLElement): void {
    const clickInside=this.selectComponent.nativeElement.contains(target);
    if (!clickInside){
      this.clickMenuSubject$.next(false);
    }
  }
  ngOnInit(): void {
    this.clickMenuSub=this.clickMenu$.pipe(
      tap(show=>{
        this.show=show
        if(show){
          this.clickSub=this.clickOutService.documentClickedTarget
          .subscribe(target=>this.documentClickListener(target));
        }else if(!show && this.clickSub!==null){
          this.clickSub.unsubscribe();
        }
      })
    ).subscribe();
  }
  ngOnDestroy(){
    this.clickMenuSub.unsubscribe();
  }
}
