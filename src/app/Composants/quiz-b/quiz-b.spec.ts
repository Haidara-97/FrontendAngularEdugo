import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizB } from './quiz-b';

describe('QuizB', () => {
  let component: QuizB;
  let fixture: ComponentFixture<QuizB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
