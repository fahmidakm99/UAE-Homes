import { Component, Input } from '@angular/core';
import { FilterOptions } from '../models/property.model';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: false,
  
})
export class FilterModalComponent {
  @Input() filters!: FilterOptions;

  constructor(private modalCtrl: ModalController) {}

 updateFilter<K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) {
  this.filters = { ...this.filters, [key]: value };
}


  applyFilters() {
    this.modalCtrl.dismiss(this.filters); // send back updated filters
  }

  closeModal() {
    this.modalCtrl.dismiss(); // close without changes
  }

  resetFilters() {
    this.filters = {
      city: 'all',
      type: 'all',
      purpose: 'all',
      minPrice: 0,
      maxPrice: 50000000,
      bedrooms: 'all',
      searchQuery: ''
    };
  }
}
