import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA } from './exercice-a';

describe('ExerciceA', () => {
  let component: ExerciceA;
  let fixture: ComponentFixture<ExerciceA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
