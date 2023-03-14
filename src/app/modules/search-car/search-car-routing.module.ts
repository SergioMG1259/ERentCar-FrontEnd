import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { SearchCarComponent } from './pages/search-car/search-car.component';

const routes: Routes = [
  {
    path:'',
    component:SearchCarComponent
  },{
    path:'car-detail/:i',
    component:CarDetailComponent
  }
];// /reservation for routing dialog
/*,{
    path:'car-detail/:i/reservation',
    component:CarDetailComponent
  } */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchCarRoutingModule { }
