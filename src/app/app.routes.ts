import { Routes } from '@angular/router';
import {Dashboard} from './Composants/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // redirection par défaut
  { path: 'dashboard', component: Dashboard },
];
