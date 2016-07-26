import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators  } from '@angular/forms';
import { FormValidationsService } from './form-validations.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'AirshipCMS';
  public emailControl: FormControl

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.emailControl = new FormControl('', Validators.compose([Validators.required, FormValidationsService.validateEmailFormat]));
  }
}
