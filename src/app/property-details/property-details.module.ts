import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyDetailsPageRoutingModule } from './property-details-routing.module';

import { PropertyDetailsPage } from './property-details.page';


@NgModule({
  declarations: [PropertyDetailsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [PropertyDetailsPage] // ✅ export it so other modules can use it
})
export class PropertyDetailsPageModule {}

