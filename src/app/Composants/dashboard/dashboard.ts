import {Component, OnInit} from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {DashboardService} from '../../Services/DashboardService';
import {CommonModule} from '@angular/common';
import {
  faBook, faBookMedical,
  faFlagCheckered,
  faMedal,
  faPlusCircle,
  faSquarePollHorizontal,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Navebar} from '../../shared/navebar/navebar';
import {Sidebar} from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [
    BaseChartDirective, CommonModule, FaIconComponent, Navebar, Sidebar
  ],
  templateUrl: './dashboard.html',

  standalone: true,
  styleUrl: './dashboard.css'
})
export class Dashboard {
  protected readonly faFlagCheckered = faFlagCheckered;
  protected readonly faSquarePollHorizontal = faSquarePollHorizontal;
  protected readonly faBook = faBook;
  protected readonly faUsers = faUsers;
  protected readonly faMedal = faMedal;
  protected readonly faPlusCircle = faPlusCircle;
  protected readonly faBookMedical = faBookMedical;
}
