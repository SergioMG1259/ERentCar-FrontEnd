import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'my-cars',
    loadChildren:()=>import('src/app/modules/my-cars-owner/my-cars-owner.module').then(m=>m.MyCarsOwnerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
