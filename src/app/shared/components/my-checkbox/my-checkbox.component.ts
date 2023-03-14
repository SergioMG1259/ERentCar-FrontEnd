import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.css']
})
export class MyCheckboxComponent implements OnInit {
  @Input() model:boolean=false
  @Output() modelChange:EventEmitter<boolean>=new EventEmitter<boolean>()
  constructor() { }
  click(){
    this.model=!this.model
    this.modelChange.emit(this.model)
  }
  ngOnInit(): void {
  }

}
