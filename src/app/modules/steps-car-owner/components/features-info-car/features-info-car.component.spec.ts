import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesInfoCarComponent } from './features-info-car.component';

describe('FeaturesInfoCarComponent', () => {
  let component: FeaturesInfoCarComponent;
  let fixture: ComponentFixture<FeaturesInfoCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesInfoCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesInfoCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
