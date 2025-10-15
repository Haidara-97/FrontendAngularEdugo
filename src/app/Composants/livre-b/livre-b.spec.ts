import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreB } from './livre-b';

describe('LivreB', () => {
  let component: LivreB;
  let fixture: ComponentFixture<LivreB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
