import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ClickOutService } from 'src/app/core/services/click-out.service';

@Component({
  selector: 'app-my-car-detail',
  templateUrl: './my-car-detail.component.html',
  styleUrls: ['./my-car-detail.component.css']
})
export class MyCarDetailComponent implements OnInit {
  options:string[]=[]
  optionSelected:string="Locations"
  fuelOption:string="Petrol"
  gearboxOption:string="Automatic"
  moneyOption:string="PEN"
  description:string="Lorem Ipsum"
  addWheelchair:boolean=false
  addChildSeat:boolean=false

  imagesArray:number[]=[]
  borrar:number=0

  locationsForm=new FormGroup({
    locations:new FormArray([])
  })

  constructor(private clickOutService:ClickOutService) {
    this.options=["Information","Features","Images","Locations"]
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this.clickOutService.documentClickedTarget.next(event.target);
    /*aqui si emite un elemento html para cerrar los select*/
  }
  clickAddImage(){
    if(this.imagesArray.length<6){
      this.imagesArray.push(this.borrar)
      this.borrar=this.borrar+1
    }
  }
  clickDeleteImage(position:number){
    console.log(position)
    if(this.imagesArray[position]!=null){
      this.imagesArray.splice(position,1)
      console.log(this.imagesArray.length)
    }
  }
  getLocations():FormArray{
    return this.locationsForm.get('locations') as FormArray
  }
  clickAddLocationRow(){
    this.getLocations().push(new FormControl(''));
  }
  clickDeleteLocationRow(i:number){
    this.getLocations().removeAt(i)
  }

  ngOnInit(): void {
  }

}
