import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentClientComponent } from './rent-client.component';

describe('RentClientComponent', () => {
  let component: RentClientComponent;
  let fixture: ComponentFixture<RentClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
