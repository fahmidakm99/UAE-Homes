import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Property } from '../models/property.model'; // for PropertyCard and PropertyDetails
import { FilterOptions } from '../models/property.model'; // for PropertyFilters
import { FavoritesService } from '../services/favorite';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  standalone: false,
})
export class PropertyCardComponent {
  @Input() property!: Property;
  // @Output() click = new EventEmitter<Property>();
  @Output() cardSelected = new EventEmitter<Property>();

  // isFavorite = false;
constructor(private favService: FavoritesService) {}
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(price);
  }

  // toggleFavorite(event: Event) {
  //   event.stopPropagation();
  //   this.isFavorite = !this.isFavorite;
  // }
get isFavorite(): boolean {
    // Convert to String to avoid 'string vs number' comparison errors
    return this.favService.isFavorite(String(this.property.id));
  }

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.favService.toggleFavorite(this.property);
  }
  onCardClick() {
    this.cardSelected.emit(this.property);
  }
}

