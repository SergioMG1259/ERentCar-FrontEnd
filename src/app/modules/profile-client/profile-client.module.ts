import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileClientRoutingModule } from './profile-client-routing.module';
import { ProfileClientComponent } from './pages/profile-client/profile-client.component';


@NgModule({
  declarations: [
    ProfileClientComponent
  ],
  imports: [
    CommonModule,
    ProfileClientRoutingModule,
  ]
})
export class ProfileClientModule { }
