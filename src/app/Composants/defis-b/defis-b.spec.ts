import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefisB } from './defis-b';

describe('DefisB', () => {
  let component: DefisB;
  let fixture: ComponentFixture<DefisB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefisB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefisB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
