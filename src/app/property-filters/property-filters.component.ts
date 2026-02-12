import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterOptions } from '../models/property.model';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-property-filters',
  templateUrl: './property-filters.component.html',
  styleUrls: ['./property-filters.component.scss'],
  standalone: false,
  
})
export class PropertyFiltersComponent {
  // Input from parent
  @Input() filters!: FilterOptions;

  // Output to parent (for two-way binding)
  @Output() filtersChange = new EventEmitter<FilterOptions>();

  isFilterModalOpen = false;
  constructor(private modalCtrl: ModalController) {}
  /**
   * Update a single filter field and emit the updated filters
   */
  updateFilter(key: keyof FilterOptions, value: string | number) {
    this.filtersChange.emit({ ...this.filters, [key]: value });
  }

  async openFilterModal() {
    const modal = await this.modalCtrl.create({
      component: FilterModalComponent,
      componentProps: { filters: this.filters },
    });

    modal.onDidDismiss().then((event) => {
      if (event.data) {
        this.filtersChange.emit(event.data);
      }
    });

    await modal.present();
  }
  closeFilterModal() {
    this.isFilterModalOpen = false;
  }

  /**
   * Reset all filters to default values
   */
  resetFilters() {
    this.filtersChange.emit({
      city: 'all',
      type: 'all',
      purpose: 'all',
      minPrice: 0,
      maxPrice: 50000000,
      bedrooms: 'all',
      searchQuery: '',
    });
  }
}
