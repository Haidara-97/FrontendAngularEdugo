import { Component } from '@angular/core';
import {
  faArrowRightFromBracket,
  faBook, faChevronLeft, faDumbbell,
  faFlagCheckered, faGaugeHigh,
  faGear, faMedal,
  faQuestion,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  imports: [
    FaIconComponent
  ],
  templateUrl: './sidebar.html',
  standalone: true,
  styleUrl: './sidebar.css'
})
export class Sidebar {

  protected readonly faArrowRightFromBracket = faArrowRightFromBracket;
  protected readonly faGear = faGear;
  protected readonly faFlagCheckered = faFlagCheckered;
  protected readonly faQuestion = faQuestion;
  protected readonly faBook = faBook;
  protected readonly faUsers = faUsers;
  protected readonly faGaugeHigh = faGaugeHigh;
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faMedal = faMedal;
  protected readonly faDumbbell = faDumbbell;
}
