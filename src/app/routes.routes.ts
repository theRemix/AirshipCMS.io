import { EmailFormComponent } from './email-form';
import { AircraftSelectionComponent } from './aircraft-selection';
import { ThankYouComponent } from './thank-you';

export const Routes = [
  { path: '', component: EmailFormComponent },
  { path: 'choose-your-aircraft', component: AircraftSelectionComponent },
  { path: 'thank-you', component: ThankYouComponent }
]
