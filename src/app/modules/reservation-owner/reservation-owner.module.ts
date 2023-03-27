import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationOwnerRoutingModule } from './reservation-owner-routing.module';
import { ReservationOwnerComponent } from './pages/reservation-owner/reservation-owner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReservationOwnerCardComponent } from './components/reservation-owner-card/reservation-owner-card.component';


@NgModule({
  declarations: [
    ReservationOwnerComponent,
    ReservationOwnerCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReservationOwnerRoutingModule
  ]
})
export class ReservationOwnerModule { }
