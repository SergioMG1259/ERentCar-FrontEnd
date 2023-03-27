import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentOwnerComponent } from './pages/rent-owner/rent-owner.component';

const routes: Routes = [
  {
    path:'',
    component:RentOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentOwnerRoutingModule { }
