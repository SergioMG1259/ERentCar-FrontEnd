import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DetailsClientComponent } from './pages/details-client/details-client.component';
import { GraphicsClientComponent } from './pages/graphics-client/graphics-client.component';

const routes: Routes = [{
    path:'details',
    component:DetailsClientComponent
  },{
    path:'graphics',
    component:GraphicsClientComponent
  },{
    path:'change-password',
    component:ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsProfileClientRoutingModule { }
