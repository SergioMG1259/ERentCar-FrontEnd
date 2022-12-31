import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationClientComponent } from './pages/reservation-client/reservation-client.component';

const routes: Routes = [
  {
    path:'',
    component:ReservationClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationClientRoutingModule { }
