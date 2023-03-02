import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileClientComponent } from './pages/profile-client/profile-client.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileClientComponent,
    loadChildren:()=>import('src/app/modules/options-profile-client/options-profile-client.module').then(m=>m.OptionsProfileClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileClientRoutingModule { }
