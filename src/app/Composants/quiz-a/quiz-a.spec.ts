import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizA } from './quiz-a';

describe('QuizA', () => {
  let component: QuizA;
  let fixture: ComponentFixture<QuizA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
