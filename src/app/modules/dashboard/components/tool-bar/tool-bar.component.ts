import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ExpandedService } from '../../services/expanded.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  expanded!:boolean
  show:boolean=false
  constructor(private expandedService:ExpandedService,private router: Router) { 

  }
  clickToggle(){
    this.expanded=!this.expanded
    this.expandedService.expanded$.emit(this.expanded)
  }
  clickDropMenu(){
    this.show=!this.show
  }
  redirectToProfile(){
    let userType = 'owner'; // Obtener el tipo de usuario
    // if (userType == 'client') {
    //   this.router.navigate(['/Dashboard/client/profile/details']);
    // } else if (userType == 'owner') {
    //   this.router.navigate(['/Dashboard/owner/profile/details']);
    // } else {
    //   this.router.navigate(['/Dashboard']); // Ruta predeterminada
    // }
    const routeProfile= `/Dashboard/${userType}/profile/details`;
    this.router.navigate([routeProfile]);
  }
  ngOnInit(): void {
    this.expandedService.expanded$.subscribe(response=>{
      this.expanded=response
    })
  }

}
