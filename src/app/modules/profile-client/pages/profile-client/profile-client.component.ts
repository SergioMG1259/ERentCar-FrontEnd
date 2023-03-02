import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {
  
  constructor(private router:Router,private route:ActivatedRoute) {

  }
  navigateOptions(option:string){
    this.router.navigate([option],{relativeTo:this.route});
  }

  ngOnInit(): void {
  }

}
