import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentClientComponent } from './pages/rent-client/rent-client.component';

const routes: Routes = [
  {
    path:'',
    component:RentClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentClientRoutingModule { }
