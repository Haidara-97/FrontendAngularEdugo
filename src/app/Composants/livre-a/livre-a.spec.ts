import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreA } from './livre-a';

describe('LivreA', () => {
  let component: LivreA;
  let fixture: ComponentFixture<LivreA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
