import { Component } from '@angular/core';
import { EmailFormComponent } from './email-form';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [EmailFormComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'AirshipCMS';
}
