import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {
  charactersLeft:number=200
  description:string=""
  rating:number=1
  constructor() { }

  ngOnInit(): void {
  }

}
