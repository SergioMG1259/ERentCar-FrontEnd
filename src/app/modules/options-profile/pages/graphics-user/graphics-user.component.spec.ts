import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsClientComponent } from './graphics-user.component';

describe('GraphicsClientComponent', () => {
  let component: GraphicsClientComponent;
  let fixture: ComponentFixture<GraphicsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
