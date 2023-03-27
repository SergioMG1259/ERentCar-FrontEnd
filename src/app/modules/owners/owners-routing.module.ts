import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'my-cars',
    loadChildren:()=>import('src/app/modules/my-cars-owner/my-cars-owner.module').then(m=>m.MyCarsOwnerModule)
  },
  {
    path:'reservations',
    loadChildren:()=>import('src/app/modules/reservation-owner/reservation-owner.module').then(m=>m.ReservationOwnerModule)
  },
  {
    path:'rents',
    loadChildren:()=>import('src/app/modules/rent-owner/rent-owner.module').then(m=>m.RentOwnerModule)
  },
  {
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
export class OwnersRoutingModule { }
