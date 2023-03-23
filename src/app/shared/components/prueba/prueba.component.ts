import { Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogRef } from 'src/app/core/dialog/dialog-ref';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>PruebaComponent),
      multi:true,
    },
  ]
})
export class PruebaComponent implements OnInit,ControlValueAccessor {

  @Input() placeholder:string="placeholder"
  @Input() border:string|null=null
  @Input() type:string="text"
  @Input() isPassword:boolean=false

 //Para el enlace doble 
  //@Input() model!:string
  @Output() modelChange:EventEmitter<string>=new EventEmitter<string>();
  
  showPassword:boolean=false

  content:string=""
  protected onChangeCb?:(value:string)=>void
  protected onTouchedCb?:()=>void

  // constructor(private dialogRef: DialogRef) { 
  // }
  constructor(){}
  // contentChange($event:any){
  //   this.onChangeCb($event.target.value);
  // }
  click(){
    this.content='asdasdasd'
    this.onChangeCb?.(this.content)
    console.log(this.onChangeCb?.(this.content))
  }
  writeValue(obj: string): void {
    this.content=obj
  }
  registerOnChange(fn: any): void {
    this.onChangeCb=fn
  }
  // registerOnTouched(fn: any): void {
  //   this.onTouchCb=fn
  // }
  registerOnTouched(fn: any): void {
    this.onTouchedCb=fn
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  clickPassword(){
    this.showPassword=!this.showPassword
    if(this.type=="text"){
      this.type="password"
    }
    else{
      this.type="text"
    }
  }

  ngOnInit(): void {
   
  }

}
