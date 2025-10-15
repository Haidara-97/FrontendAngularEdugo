import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeA } from './challenge-a';

describe('ChallengeA', () => {
  let component: ChallengeA;
  let fixture: ComponentFixture<ChallengeA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
