/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FormValidationsService } from './form-validations.service';

describe('FormValidations Service', () => {
  beforeEachProviders(() => [FormValidationsService]);

  it('should ...',
      inject([FormValidationsService], (service: FormValidationsService) => {
    expect(service).toBeTruthy();
  }));
});
