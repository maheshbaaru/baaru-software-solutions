import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'Baaru Solution | Smart Digital & IoT Solutions' },
  { path: '**', redirectTo: '' }
];