import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class FormValidationsService {

  constructor() {}

  static validateEmailFormat(c:FormControl) {
    const emailPattern = (/\S+@\S+\.\S+/);

    return emailPattern.test(c.value) ? null : {
      validateEmailFormat : {
        valid : false
      }
    }
  }
}
