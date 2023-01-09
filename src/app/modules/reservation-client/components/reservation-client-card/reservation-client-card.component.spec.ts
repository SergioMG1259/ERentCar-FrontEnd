import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationClientCardComponent } from './reservation-client-card.component';

describe('ReservationClientCardComponent', () => {
  let component: ReservationClientCardComponent;
  let fixture: ComponentFixture<ReservationClientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationClientCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationClientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
