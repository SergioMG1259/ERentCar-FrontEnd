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
    loadChildren:()=>import('src/app/modules/schedule/schedule.module').then(m=>m.ScheduleModule)
  },{
    path:'profile',
    loadChildren:()=>import('src/app/modules/profile-user/profile-user.module').then(m=>m.ProfileUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
