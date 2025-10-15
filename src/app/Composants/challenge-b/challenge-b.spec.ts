import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeB } from './challenge-b';

describe('ChallengeB', () => {
  let component: ChallengeB;
  let fixture: ComponentFixture<ChallengeB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
