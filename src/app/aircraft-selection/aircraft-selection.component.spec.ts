/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AircraftSelectionComponent } from './aircraft-selection.component';

describe('Component: AircraftSelection', () => {
  it('should create an instance', () => {
    let component = new AircraftSelectionComponent();
    expect(component).toBeTruthy();
  });
});
