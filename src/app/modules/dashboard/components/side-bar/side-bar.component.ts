import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpandedService } from '../../services/expanded.service';
interface option{
  title:string,
  icon:string,
  link:string
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  expanded!:boolean
  hiddenNav:boolean
  options:option[]
  constructor(private expandedService:ExpandedService,private route:Router,private router:ActivatedRoute) {
    /*this.updateExpanded();*/
    if(window.innerWidth>1024){
      this.expanded=true
      this.hiddenNav=true
    }else{
      this.hiddenNav=false
    }
    this.options=[
      {title:'Search',icon:'bx bx-search-alt-2',link:'/Dashboard/client/search'},
      {title:'Reservations',icon:'bx bx-calendar-event',link:'/Dashboard/client/reservations'},
      {title:'Rents',icon:'bx bxs-key',link:'/Dashboard/client/rents'},
      {title:'Schedule',icon:'bx bx-stopwatch',link:'/Dashboard/client/schedule'}
    ]
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
