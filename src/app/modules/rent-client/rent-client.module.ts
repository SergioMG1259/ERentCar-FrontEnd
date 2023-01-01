import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentClientRoutingModule } from './rent-client-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RentClientComponent } from './pages/rent-client/rent-client.component';


@NgModule({
  declarations: [
    RentClientComponent
  ],
  imports: [
    CommonModule,
    RentClientRoutingModule,
    SharedModule
  ]
})
export class RentClientModule { }
