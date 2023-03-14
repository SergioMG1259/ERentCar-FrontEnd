import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarDetailComponent } from './my-car-detail.component';

describe('MyCarDetailComponent', () => {
  let component: MyCarDetailComponent;
  let fixture: ComponentFixture<MyCarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCarDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
