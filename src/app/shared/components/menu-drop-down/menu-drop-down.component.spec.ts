import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropDownComponent } from './menu-drop-down.component';

describe('MenuDropDownComponent', () => {
  let component: MenuDropDownComponent;
  let fixture: ComponentFixture<MenuDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
