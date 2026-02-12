import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PropertyCardComponent ,HeaderComponent,FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    PropertyCardComponent, // Export it so Home and Favorite can see it
    CommonModule,
    IonicModule,
     HeaderComponent, FooterComponent,
     TranslateModule
  ]
})
export class SharedModule {}