import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ChartConfiguration} from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getStats(): Observable<any> {
    return of({
      users: 10000,
      books: 10000,
      quizzes: 10000,
      challenges: 10000
    });
  }

  getUserActivities(): Observable<ChartConfiguration<'line'>['data']> {
    return of({
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      datasets: [
        { label: 'Utilisateurs actifs', data: [100, 200, 400, 300, 500, 600, 700], borderColor: 'blue', fill: false },
        { label: 'Quiz complétés', data: [50, 100, 150, 200, 250, 300, 350], borderColor: 'green', fill: false }
      ]
    });
  }

  getReadingDistribution(): Observable<ChartConfiguration<'pie'>['data']> {
    return of({
      labels: ['Mathématiques','Français','Histoire','Géographie','Anglais','ECM','Physique','Chimie'],
      datasets: [{ data: [12,15,10,8,10,5,20,20], backgroundColor: ['blue','green','yellow','orange','red','grey','black','purple'] }]
    });
  }

  getTopUsers(): Observable<any[]> {
    return of([
      { name: 'Hamidou DJIRE', points: 1200 },
      { name: 'Djeneba H.', points: 1100 },
      { name: 'Aminata K.', points: 1000 }
    ]);
  }
  
}
