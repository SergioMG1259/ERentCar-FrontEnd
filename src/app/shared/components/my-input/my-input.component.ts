import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css'],
})
export class MyInputComponent implements OnInit{
  @Input() placeholder:string="placeholder"
  @Input() border:string|null=null
  @Input() type:string="text"
  @Input() isPassword:boolean=false

 //Para el enlace doble 
  @Input() model!:string
  @Output() modelChange:EventEmitter<string>=new EventEmitter<string>();
  
  showPassword:boolean=false

  constructor() { 
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
