import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCarDetailComponent } from './pages/my-car-detail/my-car-detail.component';
import { MyCarsComponent } from './pages/my-cars/my-cars.component';

const routes: Routes = [
  {
    path:'',
    component:MyCarsComponent
  },{
    path:'car-detail/:i',
    component:MyCarDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCarsOwnerRoutingModule { }
