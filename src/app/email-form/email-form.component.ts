import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormValidationsService } from '../form-validations.service';

@Component({
  moduleId: module.id,
  selector: 'app-email-form',
  templateUrl: 'email-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  styleUrls: ['email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  public emailForm: FormGroup
  public invalidEmail = true;
  public checkingEmail = false;

  constructor(private formBuilder: FormBuilder) {}

  validateEmail() {
    this.checkingEmail = true;

    (this.emailForm.controls['email'].errors && this.emailForm.controls['email'].errors['validateEmailFormat']) ?
      null :
      this.invalidEmail = false;
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, FormValidationsService.validateEmailFormat])]
    })

  }
}
