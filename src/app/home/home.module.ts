import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { PropertyFiltersComponent } from '../property-filters/property-filters.component';
import { PropertyDetailsPageModule } from '../property-details/property-details.module';
import { HeaderComponent } from '../header/header.component';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
    PropertyDetailsPageModule,
  ],
  declarations: [
    HomePage,
    PropertyFiltersComponent,
    FilterModalComponent,
  ],
})
export class HomePageModule {}
