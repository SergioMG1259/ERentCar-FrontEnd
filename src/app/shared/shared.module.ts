import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySelectComponent } from './components/my-select/my-select.component';
import { MyOptionComponent } from './components/my-option/my-option.component';
import { BorderDirective } from './directives/border.directive';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyInputComponent } from './components/my-input/my-input.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StarsComponent } from './components/stars/stars.component';
import { RatingComponent } from './components/rating/rating.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CalendarComponent } from './components/calendar/calendar.component';

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
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
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
    CalendarComponent
  ]
})
export class SharedModule { }
