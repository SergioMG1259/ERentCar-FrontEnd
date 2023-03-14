import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCarsOwnerRoutingModule } from './my-cars-owner-routing.module';
import { MyCarsComponent } from './pages/my-cars/my-cars.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyCarDetailComponent } from './pages/my-car-detail/my-car-detail.component';


@NgModule({
  declarations: [
    MyCarsComponent,
    MyCarDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyCarsOwnerRoutingModule
  ]
})
export class MyCarsOwnerModule { }
