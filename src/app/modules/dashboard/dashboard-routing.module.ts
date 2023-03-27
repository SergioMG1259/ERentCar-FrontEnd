import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /*{
    path:'search',
    loadChildren:()=>import('src/app/modules/search-car/search-car.module').then(m=>m.SearchCarModule)
  },
  {
    path:'car-detail',
    loadChildren:()=>import('src/app/modules/car-detail/car-detail.module').then(m=>m.CarDetailModule)
  },
  {
    path:'reservations',
    loadChildren:()=>import('src/app/modules/reservation-client/reservation-client.module').
    then(m=>m.ReservationClientModule)
  },{
    path:'rents',
    loadChildren:()=>import('src/app/modules/rent-client/rent-client.module')
    .then(m=>m.RentClientModule)
  }*/
  {
    path:'client',
    loadChildren:()=>import('src/app/modules/clients/clients.module').then(m=>m.ClientsModule)
  },{
    path:'owner',
    loadChildren:()=>import('src/app/modules/owners/owners.module').then(m=>m.OwnersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }