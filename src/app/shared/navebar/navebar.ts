import { Component } from '@angular/core';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navebar',
  imports: [
    FaIconComponent
  ],
  templateUrl: './navebar.html',
  standalone: true,
  styleUrl: './navebar.css'
})
export class Navebar {

  protected readonly faBell = faBell;
}
