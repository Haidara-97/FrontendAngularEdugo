import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Dashboard} from './Composants/dashboard/dashboard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {Sidebar} from './shared/sidebar/sidebar';
import {Navebar} from './shared/navebar/navebar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, FontAwesomeModule, Sidebar, Navebar],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AppEdugo');
}
