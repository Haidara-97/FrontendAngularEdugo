import { Routes } from '@angular/router';
import {Dashboard} from './Composants/dashboard/dashboard';
import {ListeUtilisateur} from './Composants/liste-utilisateur/liste-utilisateur';
import {LivreA} from './Composants/livre-a/livre-a';

export const routes: Routes = [
  { path: '', redirectTo: 'listeUtilisateur', pathMatch: 'full' }, // redirection par défaut
  { path: 'listeUtilisateur', component: LivreA },
];
