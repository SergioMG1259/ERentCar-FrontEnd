import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OptionsProfileRoutingModule } from './options-profile-routing.module';
import { DetailsProfileComponent } from './pages/details-profile/details-profile.component';
import { GraphicsUserComponent } from './pages/graphics-user/graphics-user.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetailsProfileComponent, GraphicsUserComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    OptionsProfileRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OptionsProfileClientModule { }
