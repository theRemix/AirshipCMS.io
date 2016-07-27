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
  public paperplaneClicked = false;
  public airshipClicked = false;
  public spaceshipClicked = false;

  constructor() {}

  ngOnInit() {
  }

  checkAircraft(aircraft) {
    switch(aircraft) {
      case 'paperplane':
        this.paperplaneClicked = !this.paperplaneClicked;
        this.airshipClicked = false;
        this.spaceshipClicked= false;
        break;
      case 'airship':
        this.airshipClicked = !this.airshipClicked;
        this.paperplaneClicked = false;
        this.spaceshipClicked= false;
        break;
      case 'spaceship':
        this.spaceshipClicked = !this.spaceshipClicked;
        this.paperplaneClicked = false;
        this.airshipClicked = false;
        break;
    }
  }

  getPaperplaneClass() {
    if (this.paperplaneClicked) {
      return 'clicked';
    }
    else {
      return '';
    }
  }

  getAirshipClass() {
    if (this.airshipClicked) {
      return 'clicked';
    }
    else {
      return '';
    }
  }

  getSpaceshipClass() {
    if (this.spaceshipClicked) {
      return 'clicked';
    }
    else {
      return '';
    }
  }

  enableSubmit() {
    if (this.spaceshipClicked === true || this.paperplaneClicked === true || this.airshipClicked === true) {
      return 'enabled';
    }
    else {
      return '';
    }
  }

}
