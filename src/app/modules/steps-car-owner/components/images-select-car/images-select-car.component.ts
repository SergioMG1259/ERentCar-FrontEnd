import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { FadeIn } from 'src/app/core/animations/fade-in';

@Component({
  selector: 'app-images-select-car',
  templateUrl: './images-select-car.component.html',
  styleUrls: ['./images-select-car.component.css'],
  animations: [FadeIn(800)]
})
export class ImagesSelectCarComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!:ElementRef;
  @Input() isForUpdate:boolean=true
  
  error:boolean=false
  imagesArray:any[]=[]
  borrar:number=0

  @HostBinding('@fadeIn') arcAnimation() {}

  constructor() {

   }
  clickAddImage(){
    if(this.imagesArray.length<6){
      this.imagesArray.push(this.borrar)
      this.borrar=this.borrar+1
    }
  }
  selectFiles(e:any){
    if(e.target.files){
      for(let i=0;i<File.length;i++){
        var file=e.target.files[i]
        var reader=new FileReader()
        if (file && file.type.match('image.*')) {
          if(file.size>1097152){
            this.error=true
          }
          else{
            reader.readAsDataURL(file)
            reader.onload=(event:any)=>{
              this.imagesArray.push(event.target.result)
              this.fileUpload.nativeElement.value=''
              this.error=false
            }
          }
        }
      }
    }
  }
  clickDeleteImage(position:number){
    if(this.imagesArray[position]!=null){
      this.imagesArray.splice(position,1)
      this.fileUpload.nativeElement.value=''
    }
  }
  ngOnInit(): void {
  }

}
