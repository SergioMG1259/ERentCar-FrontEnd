import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-drop-down',
  templateUrl: './menu-drop-down.component.html',
  styleUrls: ['./menu-drop-down.component.css']
})
export class MenuDropDownComponent implements OnInit {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
