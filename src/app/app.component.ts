import { Component } from '@angular/core';
import { ListsComponent } from './lists';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ListsComponent]
})
export class AppComponent {
  title = 'app works!';
}
