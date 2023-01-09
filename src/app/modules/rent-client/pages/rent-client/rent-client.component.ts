import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
interface event{
  model:string
  brand:string
  img:string
  date1:Date
  date2:Date
}
interface element{
  index:number
  lenght:number
  height:number
}
@Component({
  selector: 'app-rent-client',
  templateUrl: './rent-client.component.html',
  styleUrls: ['./rent-client.component.css']
})
export class RentClientComponent implements OnInit {
  events:event[]=[]
  days:Date[]=[]
  matrix:element[][]=[]
  daysWeek:string[]=[]
  constructor() { 
    this.events=[
      {model:'Hilux 2023',brand:'Toyota',img:'https://i.pinimg.com/originals/f0/dc/02/f0dc025c9e8b4acd57a49929614a077d.jpg',
      date1:new Date(2023,0,2,0),date2:new Date(2023,0,2,4)},
      {model:'Hilux 2023',brand:'Toyota',img:'https://i.pinimg.com/originals/f0/dc/02/f0dc025c9e8b4acd57a49929614a077d.jpg',
      date1:new Date(2023,0,3,8),date2:new Date(2023,0,3,9)},
      {model:'Hilux 2023',brand:'Toyota',img:'https://i.pinimg.com/originals/f0/dc/02/f0dc025c9e8b4acd57a49929614a077d.jpg',
      date1:new Date(2022,11,31,10),date2:new Date(2023,0,2,10)}
    ]
    this.days=[
      new Date(2023,0,1,0),new Date(2023,0,2,0),new Date(2023,0,3,0),new Date(2023,0,4,23)
    ]
    
    this.daysWeek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  }
  generateMatrix(){
   for(let i=0;i<24;i++){
    this.matrix[i]=[]
    for(let j=0;j<4;j++){
      this.matrix[i][j] = {index:-1,lenght:0,height:0};
    }
   }
  }
  fillSchedule(){
    const toHour=(1000*60*60)
    const toDays=(1000*60*60*24)
    let day1T
    let d
    let rangeDaysEvent
    let rangeToLastDay
    let dayAuxLast=this.days[3]
    let dayAuxFirst=this.days[0]
    let dayPosition
    for(let i=0;i<this.events.length;i++){
      day1T=new Date(this.events[i].date2)
      for (d = new Date(this.events[i].date1); d <= day1T; d.setDate(d.getDate() + 1)) {
       if(d>=this.days[0] && d<=this.days[3]){
          dayAuxLast.setHours(this.events[i].date1.getHours())
          dayAuxFirst.setHours(this.events[i].date1.getHours())

          rangeDaysEvent=(this.events[i].date2.getTime()-d.getTime())/toHour
          //el rango entre el ultimo dia del evento con el primero dentro del calendario
          rangeToLastDay=(dayAuxLast.getTime()-d.getTime())/toHour
          //el rango entre el ultima dia del calendario con el primero dentro del calendario
          dayPosition=(d.getTime()-dayAuxFirst.getTime())/toDays
          if(rangeDaysEvent<24){
            //console.log("evento 1 "+ "i "+dayPosition+"height "+rangeDaysEvent+"width "+0)
            this.matrix[d.getHours()][dayPosition]={index:i,lenght:1,height:rangeDaysEvent+1}
          }else{
            if(rangeToLastDay>rangeDaysEvent){
              /*console.log("evento dentro "+ "i "+dayPosition+"height "+0+"width "+rangeDaysEvent/24)*/
              this.matrix[d.getHours()][dayPosition]={index:i,lenght:rangeDaysEvent/24+1,height:1}
            }
            else{
              /*console.log("evento fuera "+ "i "+dayPosition+"height "+0+"width "+rangeToLastDay/24)*/
              this.matrix[d.getHours()][dayPosition]={index:i,lenght:rangeToLastDay/24+1,height:1}
            }
          }
          break
        }
      }
    }

  }
  fillDaysWeek(date:Date){
    this.days=[]
    let dateIterate=new Date(date.setHours(0,0))
    let d=new Date(dateIterate)
    for(let i=0;i<4;i++){
      this.days.push(d)
      d.setDate(dateIterate.getDate() + i)
      d=new Date(d)
    }
    this.days[3].setHours(23,59)
    
    this.generateMatrix()
    this.fillSchedule()
  }
  ngOnInit(): void {
    this.fillDaysWeek(new Date())
  }
}