import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favorites: Property[] = [];
  private favSubject = new BehaviorSubject<Property[]>([]);
  favorites$ = this.favSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('favs');
    if (saved) {
      this.favorites = JSON.parse(saved);
      this.favSubject.next(this.favorites);
    }
  }

  toggleFavorite(property: Property) {
    const index = this.favorites.findIndex(p => String(p.id) === String(property.id));
    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(property);
    }
    localStorage.setItem('favs', JSON.stringify(this.favorites));
    this.favSubject.next([...this.favorites]);
  }

  isFavorite(id: string): boolean {
    return this.favorites.some(p => String(p.id) === String(id));
  }
}