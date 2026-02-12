import { Component } from '@angular/core';
import { Property } from '../models/property.model';
import { ModalController } from '@ionic/angular';
import { PropertyDetailsPage } from '../property-details/property-details.page';
import { FavoritesService } from '../services/favorite';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
  standalone: false,
})
export class FavoritePage {
  favorites$ = this.favService.favorites$;

  constructor(
    private favService: FavoritesService,
    private modalCtrl: ModalController
  ) {}

  async openDetails(property: Property) {
    const modal = await this.modalCtrl.create({
      component: PropertyDetailsPage,
      componentProps: { property }
    });
    await modal.present();
  }
}