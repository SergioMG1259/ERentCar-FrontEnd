import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentOwnerRoutingModule } from './rent-owner-routing.module';
import { RentOwnerComponent } from './pages/rent-owner/rent-owner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RentOwnerCardComponent } from './components/rent-owner-card/rent-owner-card.component';


@NgModule({
  declarations: [
    RentOwnerComponent,
    RentOwnerCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RentOwnerRoutingModule
  ]
})
export class RentOwnerModule { }
