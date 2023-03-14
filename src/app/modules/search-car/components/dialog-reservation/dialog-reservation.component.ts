import { Component, OnInit,Inject } from '@angular/core';
import { DialogRef } from 'src/app/core/dialog/dialog-ref';
import { DIALOG_DATA } from 'src/app/core/dialog/dialog-tokens';

@Component({
  selector: 'app-dialog-reservation',
  templateUrl: './dialog-reservation.component.html',
  styleUrls: ['./dialog-reservation.component.css']
})
export class DialogReservationComponent implements OnInit {
  initialDate:Date=new Date()
  finalDate:Date=new Date()
  today:Date=new Date()
  minFinalDate:Date=new Date()

  costHourCar:number=10
  costTimeRent:number=0

  initialHour:number=0
  finalHour:number=0
  minHourIni:number=11
  minHourFin:number=0

  selectChildrenChair:boolean=false
  selectWheelChair:boolean=false
  constructor(private dialogRef: DialogRef, @Inject(DIALOG_DATA) public data: string) { 
    /*Reglas
      *la fecha limite inicial es el dia de hoy y no cambia
      en caso son las 23 h, la fecha final limite será el dia siguiente
      mismo día:
      1 hora de separacion
      si la hora inicial es mayor a la final, la hora final pasa a aumentar 1 a la inicial
      hora inicial maximo 22, sino se considera un nuevo dia
      si hora actual es 23, no puede ir al mismo dia(bloqueo)
      diferentes dias:
      siempre la misma hora
    */
  }
  close(){
    this.dialogRef.close()
  }
  rules(){
    if(this.isDaySelectToday() && this.initialHour<this.minHourIni){
      this.initialHour=this.minHourIni
    }
    //de dia diferente a iguales
    if(this.isTheSameDay(this.initialDate,this.finalDate)){
      if(this.minHourIni==23 || this.initialHour==23){
        //aumenta en un dia la fecha final
        this.minFinalDate=this.addDaysToDate(this.initialDate,1)
        this.finalDate=this.addDaysToDate(this.finalDate,1)
        this.finalHour=this.initialHour
      }
      else if(this.minHourIni<23){ //se debe mantener la distancia entre horas
        this.minFinalDate=this.initialDate
        this.minHourFin=this.initialHour+1
        this.finalHour=this.minHourFin
      }
      /*if(this.initialHour==23){
        this.finalHour=this.initialHour
        this.minFinalDate=this.addDaysToDate(this.initialDate,1)
        this.finalDate=this.minFinalDate
      }*/
    }
    else{//de dia igual a diferente o diferente a diferente, los botones para cambiar la hora final se desactivan
      this.finalHour=this.initialHour
      this.minFinalDate=this.initialDate
      if(this.finalDate<this.initialDate){
        this.finalDate=this.addDaysToDate(this.initialDate,1)
      }
       //this.minHourFin=this.initialHour
    }
  }
  changeInitialHour(i:number){
    this.initialHour=this.initialHour+i
    if(!this.isTheSameDay(this.initialDate,this.finalDate)){
      this.finalHour=this.initialHour
    }
    if(this.isTheSameDay(this.initialDate,this.finalDate)){
      this.minHourFin=this.initialHour+1
      if(this.initialHour>=this.finalHour){
        this.finalHour=this.minHourFin
      }
    }
    this.calculateCostRentTime()
  }
  changeFinalHour(i:number){
    this.finalHour=this.finalHour+i
    this.calculateCostRentTime()
  }
  changeInitialDate(date:Date){
    this.initialDate=date
    this.rules()
    //de dia igual a diferente o diferente a diferente
    /*if(this.finalDate<this.minFinalDate){
      this.finalDate=this.addDaysToDate(this.minFinalDate,0)
    }*

    /*if(this.isTheSameDay(this.initialDate,this.finalDate)){
      this.minHourFin=this.minHourIni+1
      if(this.finalHour<this.minHourFin){
        this.finalHour=this.initialHour+1
      }
    }*/
    /*else{
      this.finalHour=this.initialHour
    }*/
    /*this.minFinalDate=this.addDaysToDate(this.initialDate,1)
    if(this.finalDate<this.minFinalDate){
      this.finalDate=this.addDaysToDate(this.minFinalDate,0)
    }*/
    this.calculateCostRentTime()
  }
  changeFinalDate(date:Date){
    this.finalDate=date
    /*if(this.isTheSameDay(this.initialDate,this.finalDate)){
      this.minHourFin=this.minHourIni+1
      if(this.finalHour<this.minHourFin){
        this.finalHour=this.initialHour+1
      }
    }
    else{
      this.finalHour=this.initialHour
    }
    if(this.finalDate<this.minFinalDate){
      this.finalDate=this.addDaysToDate(this.minFinalDate,0)
    }*/
    this.rules()
    this.calculateCostRentTime()
  }
  isDaySelectToday(){
    if((this.initialDate.getDate()==this.today.getDate() 
    && this.initialDate.getMonth()==this.today.getMonth() && this.initialDate.getFullYear()==this.today.getFullYear())){
        return true
    }
    return false
  }
  isTheSameDay(ini:Date,fin:Date){
    if((ini.getDate()==fin.getDate() 
    && ini.getMonth()==fin.getMonth() && ini.getFullYear()==fin.getFullYear())){
        return true
    }
    return false
  }
  calculateCostRentTime(){
    const transform=1000*60*60
    let initial=this.initialDate
    let final=this.finalDate
    let result
    initial.setHours(this.initialHour,0,0,0)
    final.setHours(this.finalHour,0,0,0)
    result=(final.getTime()-initial.getTime())/transform
    this.costTimeRent=result*this.costHourCar
  }
  addDaysToDate(date:Date, days:number){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }
  ngOnInit(): void {
    let hourAdd
    if(this.initialDate.getHours()==23){
      /*this.initialDate.setDate(this.initialDate.getDate()+1)
      this.today.setDate(this.today.getDate()+1)*/
      this.initialDate=this.addDaysToDate(this.initialDate,1)
      this.today=this.addDaysToDate(this.today,1)
      hourAdd=0
    }
    else {
      hourAdd=this.initialDate.getHours()+1
    }
    this.finalDate=this.addDaysToDate(this.initialDate,1)
    //this.minFinalDate=this.addDaysToDate(this.finalDate,0)
    if(hourAdd==23){
      this.minFinalDate=this.addDaysToDate(this.initialDate,1)
    }else{
      this.minFinalDate=this.addDaysToDate(this.initialDate,0)
    }
    
    /*this.finalDate.setDate(this.initialDate.getDate()+1)*/
    /*this.minFinalDate.setDate(this.finalDate.getDate())*/

    this.initialDate.setHours(0,0)
    this.finalDate.setHours(0,0)

    this.minHourIni=this.initialHour=this.finalHour=hourAdd
    this.calculateCostRentTime()
  }
}