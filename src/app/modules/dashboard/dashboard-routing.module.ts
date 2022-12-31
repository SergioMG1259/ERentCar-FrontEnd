import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
