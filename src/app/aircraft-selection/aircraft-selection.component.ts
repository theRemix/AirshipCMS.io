import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-aircraft-selection',
  templateUrl: 'aircraft-selection.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['aircraft-selection.component.css']
})
export class AircraftSelectionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
