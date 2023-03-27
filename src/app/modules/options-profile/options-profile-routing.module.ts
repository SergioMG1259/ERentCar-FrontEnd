import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DetailsProfileComponent } from './pages/details-profile/details-profile.component';
import { GraphicsUserComponent } from './pages/graphics-user/graphics-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'details', pathMatch: 'full' },
  {
    path:'details',
    component:DetailsProfileComponent
  },{
    path:'graphics',
    component:GraphicsUserComponent
  },{
    path:'change-password',
    component:ChangePasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsProfileRoutingModule { }
