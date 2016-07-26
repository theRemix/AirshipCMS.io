import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators  } from '@angular/forms';
import { FormValidationsService } from '../form-validations.service';

@Component({
  moduleId: module.id,
  selector: 'app-email-form',
  templateUrl: 'email-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  styleUrls: ['email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  public emailForm: FormGroup
  public invalidEmail = false;

  constructor(private formBuilder: FormBuilder) {}

  validateEmail(event) {
    event.preventDefault();

    (this.emailForm.controls['email'].errors && this.emailForm.controls['email'].errors['validateEmailFormat']) ?
      this.invalidEmail = true
      : null
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, FormValidationsService.validateEmailFormat])]
    })

  }
}
