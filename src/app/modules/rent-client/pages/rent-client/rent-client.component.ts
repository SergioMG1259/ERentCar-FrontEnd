import { Component, OnInit } from '@angular/core';
interface event{
  text:string
  date1:Date
  date2:Date
}
@Component({
  selector: 'app-rent-client',
  templateUrl: './rent-client.component.html',
  styleUrls: ['./rent-client.component.css']
})
export class RentClientComponent implements OnInit {
  events:event[]=[]
  days:Date[]=[]
  constructor() { 
    this.events=[
      {text:'aber',date1:new Date(2022,0,1,8),date2:new Date(2022,0,3,8)},
      {text:'aber',date1:new Date(2022,0,1,10),date2:new Date(2022,0,3,10)}
    ]
    this.days=[
      new Date(2022,0,1,0),new Date(2022,0,2,0),new Date(2022,0,3,0),new Date(2022,0,4,0)
    ]
  }

  confirmEventDate(){

  }

  ngOnInit(): void {
    let date1=new Date(2022,0,2)
    console.log(date1)
  }

}
