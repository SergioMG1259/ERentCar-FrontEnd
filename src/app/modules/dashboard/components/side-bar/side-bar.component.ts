import { Component, OnInit} from '@angular/core';
import { ExpandedService } from '../../services/expanded.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  expanded!:boolean
  hiddenNav:boolean
  constructor(private expandedService:ExpandedService) {
    /*this.updateExpanded();*/
    if(window.innerWidth>1024){
      this.expanded=true
      this.hiddenNav=true
    }else{
      this.hiddenNav=false
     
    }
  }

  clickToggle(){
    this.expanded=!this.expanded
    this.expandedService.expanded$.emit(this.expanded)
  }
  hidden(){
    if(window.innerWidth>1024)this.expanded=true
  }

  ngOnInit(): void {
    this.expandedService.expanded$.subscribe(response=>{
      this.expanded=response
    })
    this.expandedService.visibilityNav$.subscribe(response=>{
      this.hiddenNav=response
    })
  }

}
