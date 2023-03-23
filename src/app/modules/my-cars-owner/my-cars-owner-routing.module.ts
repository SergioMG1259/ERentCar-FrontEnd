import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { MyCarDetailComponent } from './pages/my-car-detail/my-car-detail.component';
import { MyCarsComponent } from './pages/my-cars/my-cars.component';

const routes: Routes = [
  {
    path:'',
    component:MyCarsComponent
  },{
    path:'car-detail/:i',
    component:MyCarDetailComponent
  },{
    path:'new-car',
    component:CreateCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCarsOwnerRoutingModule { }
