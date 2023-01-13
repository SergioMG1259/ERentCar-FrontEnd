import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleClientRoutingModule } from './schedule-client-routing.module';
import { ScheduleClientComponent } from './pages/schedule-client/schedule-client.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ScheduleClientComponent
  ],
  imports: [
    CommonModule,
    ScheduleClientRoutingModule,
    SharedModule
  ]
})
export class ScheduleClientModule { }