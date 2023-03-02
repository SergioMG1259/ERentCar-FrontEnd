import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OptionsProfileClientRoutingModule } from './options-profile-client-routing.module';
import { DetailsClientComponent } from './pages/details-client/details-client.component';
import { GraphicsClientComponent } from './pages/graphics-client/graphics-client.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetailsClientComponent, GraphicsClientComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    OptionsProfileClientRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OptionsProfileClientModule { }
