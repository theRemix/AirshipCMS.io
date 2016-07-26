/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ThankYouComponent } from './thank-you.component';

describe('Component: ThankYou', () => {
  it('should create an instance', () => {
    let component = new ThankYouComponent();
    expect(component).toBeTruthy();
  });
});
