import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'search',
    loadChildren:()=>import('src/app/modules/search-car/search-car.module').then(m=>m.SearchCarModule)
  },
  {
    path:'reservations',
    loadChildren:()=>import('src/app/modules/reservation-client/reservation-client.module').
    then(m=>m.ReservationClientModule)
  },{
    path:'rents',
    loadChildren:()=>import('src/app/modules/rent-client/rent-client.module')
    .then(m=>m.RentClientModule)
  },{
    path:'schedule',
    loadChildren:()=>import('src/app/modules/schedule-client/schedule-client.module').then(m=>m.ScheduleClientModule)
  },{
    path:'profile',
    loadChildren:()=>import('src/app/modules/profile-client/profile-client.module').then(m=>m.ProfileClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
