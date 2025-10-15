import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefisA } from './defis-a';

describe('DefisA', () => {
  let component: DefisA;
  let fixture: ComponentFixture<DefisA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefisA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefisA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
