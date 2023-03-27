import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute) {

  }
  navigateOptions(option:string){ //creo que ya no seria necesario
    this.router.navigate([option],{relativeTo:this.route});
  }
  navigateToDetails(){
    let userType='owner'
    return `/Dashboard/${userType}/profile/details`
  }
  navigateToChangePassword(){
    let userType='owner'
    return `/Dashboard/${userType}/profile/change-password`
  }
  navigateToGraphics(){
    let userType='owner'
    return `/Dashboard/${userType}/profile/graphics`
  }
  ngOnInit(): void {
  }

}
