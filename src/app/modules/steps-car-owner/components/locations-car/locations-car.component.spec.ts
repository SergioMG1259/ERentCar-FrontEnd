import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsCarComponent } from './locations-car.component';

describe('LocationsCarComponent', () => {
  let component: LocationsCarComponent;
  let fixture: ComponentFixture<LocationsCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
