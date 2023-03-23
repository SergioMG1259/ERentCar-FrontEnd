import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-car-detail',
  templateUrl: './my-car-detail.component.html',
  styleUrls: ['./my-car-detail.component.css']
})
export class MyCarDetailComponent implements OnInit {
  options:string[]=[]
  optionSelected:string="Information"
  

  constructor() {
    this.options=["Information","Features","Images","Locations"]
  }

  ngOnInit(): void {

  }
}