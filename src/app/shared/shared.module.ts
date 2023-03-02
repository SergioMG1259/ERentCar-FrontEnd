import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySelectComponent } from './components/my-select/my-select.component';
import { MyOptionComponent } from './components/my-option/my-option.component';
import { BorderDirective } from './directives/border.directive';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyInputComponent } from './components/my-input/my-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StarsComponent } from './components/stars/stars.component';
import { RatingComponent } from './components/rating/rating.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { MyInputDirective } from './directives/my-input.directive';
import { MyButtonDirective } from './directives/my-button.directive';

@NgModule({
  declarations: [
    MySelectComponent,
    MyOptionComponent,
    BorderDirective,
    MyButtonComponent,
    MyInputComponent,
    CarouselComponent,
    StarsComponent,
    RatingComponent,
    PaginationComponent,
    CalendarComponent,
    PruebaComponent,
    MyInputDirective,
    MyButtonDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MySelectComponent,
    MyOptionComponent,
    MyButtonComponent,
    MyInputComponent,
    CarouselComponent,
    BorderDirective,
    FormsModule,
    StarsComponent,
    RatingComponent,
    PaginationComponent,
    CalendarComponent,
    PruebaComponent,
    MyInputDirective,
    MyButtonDirective
  ]
})
export class SharedModule { }
