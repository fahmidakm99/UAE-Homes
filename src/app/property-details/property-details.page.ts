import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from '../models/property.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
  standalone: false,
})
export class PropertyDetailsPage {
  // @Input() property!: Property; // property to display
  // @Input() open: boolean = false; // optional open flag
  // @Output() close = new EventEmitter<void>(); // emit when modal closes
 @Input() property!: Property;  // <-- required input
  @Output() close = new EventEmitter<void>();
  /**
   * Format price in AED
   */
  constructor(private modalCtrl: ModalController){}
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(price);
  }

  /**
   * Close modal
   */
  closeModal() {
  this.modalCtrl.dismiss();
}
  // closeModal() {
  //   this.close.emit();
  // }
}