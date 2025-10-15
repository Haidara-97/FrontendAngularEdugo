import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recompenses } from './recompenses';

describe('Recompenses', () => {
  let component: Recompenses;
  let fixture: ComponentFixture<Recompenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recompenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recompenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
