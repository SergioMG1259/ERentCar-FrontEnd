import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSelectCarComponent } from './images-select-car.component';

describe('ImagesSelectCarComponent', () => {
  let component: ImagesSelectCarComponent;
  let fixture: ComponentFixture<ImagesSelectCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesSelectCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesSelectCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
