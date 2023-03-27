import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-profile',
  templateUrl: './details-profile.component.html',
  styleUrls: ['./details-profile.component.css']
})
export class DetailsProfileComponent implements OnInit {
  charactersLeft:number=200
  description:string=""
  rating:number=1
  constructor() { }

  ngOnInit(): void {
  }

}
