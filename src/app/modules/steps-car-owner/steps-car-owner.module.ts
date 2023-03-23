import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsCarComponent } from './components/locations-car/locations-car.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagesSelectCarComponent } from './components/images-select-car/images-select-car.component';
import { FeaturesInfoCarComponent } from './components/features-info-car/features-info-car.component';
import { BasicInfoCarComponent } from './components/basic-info-car/basic-info-car.component';



@NgModule({
  declarations: [
    LocationsCarComponent,
    ImagesSelectCarComponent,
    FeaturesInfoCarComponent,
    BasicInfoCarComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    LocationsCarComponent,
    ImagesSelectCarComponent,
    FeaturesInfoCarComponent,
    BasicInfoCarComponent
  ]
})
export class StepsCarOwnerModule { }
