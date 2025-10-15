import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceB } from './exercice-b';

describe('ExerciceB', () => {
  let component: ExerciceB;
  let fixture: ComponentFixture<ExerciceB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
