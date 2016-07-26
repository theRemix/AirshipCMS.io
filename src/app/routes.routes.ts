import { EmailFormComponent } from './email-form';
import { AircraftSelectionComponent } from './aircraft-selection';

export const Routes = [
  { path: '', component: EmailFormComponent },
  { path: 'choose-your-aircraft', component: AircraftSelectionComponent }
]
