import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})
export class MyCarsComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  navigateToMyCarDetails(){
    this.router.navigate(['car-detail',1],{relativeTo:this.route});
  }
  ngOnInit(): void {
  }

}
