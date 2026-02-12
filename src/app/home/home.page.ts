import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property';
import { Property, FilterOptions } from '../models/property.model';
import { PropertyFiltersComponent } from '../property-filters/property-filters.component';
import { ModalController } from '@ionic/angular';
import { PropertyDetailsPage } from '../property-details/property-details.page';
// const PROPERTIES: Property[] = [
//   {
//     id: "1",
//     title: "Luxury Apartment in Downtown Dubai",
//     price: 2500000,
//     location: "Downtown Dubai",
//     city: "Dubai",
//     bedrooms: 2,
//     bathrooms: 2,
//     area: 1450,
//     type: "Apartment",
//     purpose: "Sale",
//     image: "https://images.unsplash.com/photo-1681194189961-e2aa414f9c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     featured: true,
//   },
//   // Add the rest of your properties here...
// ];
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  filters: FilterOptions = {
    city: 'all',
    type: 'all',
    purpose: 'all',
    minPrice: 0,
    maxPrice: 50000000,
    bedrooms: 'all',
    searchQuery: '',
  };

  selectedProperty: Property | null = null;
  activeTab: 'all' | 'sale' | 'rent' = 'all';
  properties: Property[] = [];
  loading = false;
  filteredProperties: Property[] = []; // filtered properties
currentPage = 1;
  pageSize = 8;
  constructor(private propertyService: PropertyService,
    private modalCtrl: ModalController
  ) {}
  // ngOnInit() {
  //   // load properties (use your PROPERTIES array)
  //   this.properties = PROPERTIES; // import PROPERTIES from a file or define here
  //   this.applyFilters();
  // }
  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.loading = true;

    this.propertyService.getProperties().subscribe({
      next: (data) => {
        this.properties = data;
        this.filteredProperties = [...data];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }


  // This getter calculates exactly which 8 properties to show
  get paginatedProperties() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredProperties.slice(startIndex, startIndex + this.pageSize);
  }

  // Calculate total pages for the UI
  get totalPages() {
    return Math.ceil(this.filteredProperties.length / this.pageSize);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  onFilterChange(filters: FilterOptions) {
    this.filters = filters;
    this.applyFilters();
  }

  onTabChange(tab: 'all' | 'sale' | 'rent') {
    this.activeTab = tab;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProperties = this.properties.filter((property) => {
      // Tab filter
      if (this.activeTab === 'sale' && property.purpose !== 'Sale')
        return false;
      if (this.activeTab === 'rent' && property.purpose !== 'Rent')
        return false;

      // City filter
      if (this.filters.city !== 'all' && property.city !== this.filters.city)
        return false;

      // Type filter
      if (this.filters.type !== 'all' && property.type !== this.filters.type)
        return false;

      // Purpose filter
      if (
        this.filters.purpose !== 'all' &&
        property.purpose !== this.filters.purpose
      )
        return false;

      // Price filter
      if (
        property.price < this.filters.minPrice ||
        property.price > this.filters.maxPrice
      )
        return false;

      // Bedrooms filter
      if (this.filters.bedrooms !== 'all') {
        const bedroomCount = parseInt(this.filters.bedrooms);
        if (bedroomCount === 4 && property.bedrooms < 4) return false;
        if (bedroomCount !== 4 && property.bedrooms !== bedroomCount)
          return false;
      }

      // Search query
      if (this.filters.searchQuery) {
        const query = this.filters.searchQuery.toLowerCase();
        const matches =
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.city.toLowerCase().includes(query);
        if (!matches) return false;
      }

      return true;
    });
  }

 async selectProperty(property: Property) {
    const modal = await this.modalCtrl.create({
      component: PropertyDetailsPage,
      componentProps: { property }
    });
    await modal.present();
  }

  closeDetails() {
    this.selectedProperty = null;
  }
}
