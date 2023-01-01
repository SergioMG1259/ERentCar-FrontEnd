import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCarRoutingModule } from './search-car-routing.module';
import { SearchCarComponent } from './pages/search-car/search-car.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectFeaturesComponent } from './components/select-features/select-features.component';
import { CardCarComponent } from './components/card-car/card-car.component';


@NgModule({
  declarations: [
    SearchCarComponent,
    SelectFeaturesComponent,
    CardCarComponent
  ],
  imports: [
    CommonModule,
    SearchCarRoutingModule,
    SharedModule,
  ]
})
export class SearchCarModule { }
