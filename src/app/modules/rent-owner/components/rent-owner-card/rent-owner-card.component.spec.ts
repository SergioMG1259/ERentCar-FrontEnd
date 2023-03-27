import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOwnerCardComponent } from './rent-owner-card.component';

describe('RentOwnerCardComponent', () => {
  let component: RentOwnerCardComponent;
  let fixture: ComponentFixture<RentOwnerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentOwnerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentOwnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
