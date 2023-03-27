import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOwnerComponent } from './rent-owner.component';

describe('RentOwnerComponent', () => {
  let component: RentOwnerComponent;
  let fixture: ComponentFixture<RentOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
