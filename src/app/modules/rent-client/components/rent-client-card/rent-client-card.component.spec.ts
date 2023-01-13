import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentClientCardComponent } from './rent-client-card.component';

describe('RentClientCardComponent', () => {
  let component: RentClientCardComponent;
  let fixture: ComponentFixture<RentClientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentClientCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentClientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
