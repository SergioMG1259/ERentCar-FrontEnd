import { Component, Input, OnInit } from '@angular/core';
interface Page{
  value:string
}
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pageCurrent!:number/*valor o numero de pagina actual*/
  @Input() totalPages!:number

  positionCurrent:number=1/*posicion dentro del arreglo(rango) donde se encuentra la pagina actual*/
  spaces:number=1/*numero de espacios a la derecha e izquierad de la pagina actual*/

  pages:Page[]=[]

  constructor() {

  }

  fillPages(){
    /* 
      se calcula la longitud del arreglo de paginas
      se encuentra en que lugar del arreglo va la pagina actual
      se imprime un numero de pagina o ...
    */
    let i=1
    let pageValue
    let range
    this.pages=[]
    range=this.getRange()/*tamaño del arreglo de botones o paginas (no flechas)*/
    this.positionCurrent=this.getPositionPageCurrent(range)
   
    while(i<=this.totalPages && i<=range){
      
      if((i<=this.positionCurrent+this.spaces && i>=this.positionCurrent-this.spaces) || i==1||i==range){
        pageValue=this.getPageValue(i,range)/*numero o valor de la pagina (acutal,anterior o posterior)*/
        this.pages.push({
          value:pageValue.toString()
        })
      }
      else{
        this.pages.push({
          value:'...'
        })
      }
      i++
    }
  }

  getRange():number{
    let prev
    let next
    let add
    let addRatePrev
    let addRateNext

    /*if(this.totalPages<=2*this.spaces+1){//si no funciona, era un 3
      return this.totalPages
    }*/
    /*else if(this.pageCurrent==1||this.pageCurrent==this.totalPages){
      return 4
    }*/
    /*esto es con el valor del número de pagina (1,2,3....10 o 100)*/
      prev=this.pageCurrent-this.spaces //si no funciona es un 1
      next=this.pageCurrent+this.spaces
      addRatePrev=prev-1/*para saber a cuantos espacios esta el boton 1 del limite anterior al boton actual*/
      addRateNext=this.totalPages-next/*para saber a cuantos espacios esta el último boton del limite posterior al boton actual*/

      add=2*this.spaces+1+this.checkSpacesToAdd(addRatePrev)+this.checkSpacesToAdd(addRateNext)
      /*3 es por el boton actual,el anterior y posterior*/ 
      return add    
    
  }

  checkSpacesToAdd(value:number):number{
    if(value>1){/*si la distancia del actual al primer o ultimo boton es mas de uno (osea no estan juntos o a un solo espacio)*/
      return 2 /*retorna 2 porque se incluye '...' + el boton '1' o 'total de paginas'*/
    }
    else{
      return value
      /*puede retornar un cero (lo que significa que la pagina actual está al lado del primer o ultimo boton)*/
      /*puede retornar 1 (lo que significa que está a un botón de distancia del primer o último*/
      /*lo que creo que en verdad significa:*/
      /*0 es que el limite (anterior o posterior) es 1 o el numero de total de paginas (final)*/
      /*1 es que el limite (anterior o posterior) esta al lado del 1 o numero total de pagina*/
      /* (-) creo que es porque el '1' es la pagina actual*/
    }
  }

  getPositionPageCurrent(range:number):number{
    let distance /*distancia de la pagina actual al último*/

    distance=this.totalPages-this.pageCurrent

    if(distance>this.spaces+1){
      /*+1 significa que los espacios siguientes de la pagina actual no estan junto a la pagina final*/
      return range-(this.spaces+2)
      /*desde el final se resta las paginas siguientes del actual + el espacio '...' + 1 para llegar a la posicion de la pagina actual*/
    }
    return range-distance/*se resta solo la distancia porque las paginas siguientes estan junto con el final*/
  }

  getPageValue(i:number,range:number):number{
    let distanceToCurrent/*distancia a la posicion en el arreglo de la pagina actual*/
    if(i==1){
      return 1
    }
    else if(i==range){
      return this.totalPages
    }
    else{
      distanceToCurrent=i-this.positionCurrent/*si i < posicion de la pagina actual, es negativo y se resta*/
      /*si es position, es porque va despues y se sumaria para hallar el valor o numero de la pagina*/
      return this.pageCurrent+distanceToCurrent
    }
  }

  changePage(value:number|string){
    this.pageCurrent=Number(value)
    this.fillPages()
  }

  ngOnInit(): void {
    this.fillPages()
  }
}
