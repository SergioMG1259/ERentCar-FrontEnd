import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationOwnerCardComponent } from './reservation-owner-card.component';

describe('ReservationOwnerCardComponent', () => {
  let component: ReservationOwnerCardComponent;
  let fixture: ComponentFixture<ReservationOwnerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationOwnerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationOwnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
