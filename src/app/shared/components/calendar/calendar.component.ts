import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
interface day{
  number:number
  month:number
  year:number
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Output() dateChange=new EventEmitter<Date>();
  @Input() dateMinLimit?:Date
  @Input()date?:Date
  
  dayCurrent:number=0
  monthCurrent:number=0
  yearCurrent:number=0

  week:string[]
  months:string[]

  days:day[]=[]
  daysLastMonth:day[]=[]
  daysNextMonth:day[]=[]
  daySelect!:day
//creo que daySelect no sirve
  constructor() {
    this.week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    this.months=["January","February","March","April","May","June","July","August","September",
    "October","November","December"]
  }
  getInitialDate(){
    if(this.date==null){
      this.date=new Date()
    }
    this.dayCurrent=this.date.getDate()
    this.monthCurrent=this.date.getMonth()
    this.yearCurrent=this.date.getFullYear()
    this.daySelect={number:this.dayCurrent,month:this.monthCurrent,year:this.yearCurrent}
  }
  getDays(){
    let firstDaySpace=new Date(this.yearCurrent,this.monthCurrent,1).getDay()//0 sun 1 mon ...
    let lastDayMonth=new Date(this.yearCurrent,this.monthCurrent+1,0).getDate()
    //+1 es el siguiente mes, 0 es el dia anterior al inicio del mes
    let lastDaySpace=new Date(this.yearCurrent,this.monthCurrent,lastDayMonth).getDay()
    let lastDayLastMonth=new Date(this.yearCurrent,this.monthCurrent,0).getDate()

    this.daysLastMonth=[]
    this.days=[]
    this.daysNextMonth=[]

    //dias anteriores
    for(let i=firstDaySpace;i>0;i--){//este for se repite hasta llegar al dia 1(sun, mon, ...) del mes
      if(this.monthCurrent==0){
        this.daysLastMonth.push(
          {number:lastDayLastMonth+1-i,month:11,year:this.yearCurrent-1})
      }
      else{
        this.daysLastMonth.push(
          {number:lastDayLastMonth+1-i,month:this.monthCurrent-1,year:this.yearCurrent})
      }
    }
    //dias actuales
    for(let i=0;i<lastDayMonth;i++){
      this.days.push({number:i+1,month:this.monthCurrent,year:this.yearCurrent})
    }
    //dias siguientes
    for(let i=lastDaySpace;i<6;i++){
      if(this.monthCurrent==11){
        this.daysNextMonth.push({number:i-lastDaySpace+1,month:0,year:this.yearCurrent+1})
      }
      else{
        this.daysNextMonth.push({number:i-lastDaySpace+1,month:this.monthCurrent+1,year:this.yearCurrent})
      }
    }
  }

  changeDate(i:number){
    if(this.monthCurrent+i<0){
      this.monthCurrent=11
      this.yearCurrent=this.yearCurrent-1
    }
    else if(this.monthCurrent+i>11){
      this.monthCurrent=0
      this.yearCurrent=this.yearCurrent+1
    }
    else{
      this.monthCurrent=this.monthCurrent+i
    }
    this.getDays()
  }

  selectDay(day:day){
    let dayA=new Date(day.year,day.month,day.number,0,0,0)
    this.daySelect=day
    this.date=dayA
    this.dateChange.emit(this.date)
  }
  verifyDayLimit(day:day){
    let dayAux=new Date(day.year,day.month,day.number,23,59,59)
    if(this.dateMinLimit!=undefined 
      &&(dayAux<this.dateMinLimit)){
        return true
    }
    return false
  }
  dayClass(day:day):string{
    /*if(day.number==this.daySelect.number && day.month==this.daySelect.month 
      && day.year==this.daySelect.year){
        return 'select'
    }*/
    if(day.number==this.date?.getDate() && day.month==this.date?.getMonth() 
      && day.year==this.date?.getFullYear()){
        return 'select'
    }
    else if(this.verifyDayLimit(day)){
      return 'disabled'
    }
    return ''
  }

  ngOnInit(): void {
    this.getInitialDate()
    this.getDays()
  }
}