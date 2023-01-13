import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleClientComponent } from './pages/schedule-client/schedule-client.component';

const routes: Routes = [
  {
    path:'',
    component:ScheduleClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleClientRoutingModule { }
