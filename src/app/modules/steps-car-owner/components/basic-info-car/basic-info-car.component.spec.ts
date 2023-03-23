import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoCarComponent } from './basic-info-car.component';

describe('BasicInfoCarComponent', () => {
  let component: BasicInfoCarComponent;
  let fixture: ComponentFixture<BasicInfoCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
