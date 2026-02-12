import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
    private jsonUrl = 'assets/properties.json';
  //  private baseUrl = 'https://propertyfinder-uae-data.p.rapidapi.com';

  // private headers = new HttpHeaders({
  //   'X-RapidAPI-Key': '3842f4bbecmsha6f27f375c64592p134b8ejsndbaef52af984',
  //   'X-RapidAPI-Host': 'propertyfinder-uae-data.p.rapidapi.com'
  // });

  constructor(private http: HttpClient) {}

   /** Get all properties */
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.jsonUrl);
  }

  /** Get single property by ID */
  getPropertyById(id: string): Observable<Property | undefined> {
    return this.http.get<Property[]>(this.jsonUrl).pipe(
      map(properties => properties.find(p => p.id === id))
    );
  }

  /** Search / filter properties */
  searchProperties(filters: any): Observable<Property[]> {
    return this.http.get<Property[]>(this.jsonUrl).pipe(
      map(properties => {
        return properties.filter(p => {

          if (filters.purpose && p.purpose !== filters.purpose) return false;
          if (filters.city && p.city !== filters.city) return false;
          if (filters.type && p.type !== filters.type) return false;
          if (filters.bedrooms && p.bedrooms !== filters.bedrooms) return false;
          if (filters.price_min && p.price < filters.price_min) return false;
          if (filters.price_max && p.price > filters.price_max) return false;

          return true;
        });
      })
    );
  }
}
//   /** Get single property by ID */
//   getPropertyById(propertyId: number): Observable<any> {
//     return this.http.post(
//       `${this.baseUrl}/property-details?property_id=${propertyId}`,
//       { headers: this.headers }
//     );
//   }
//   getPropertyDetails(propertyId: string): Observable<any> {
//     return this.http.get(
//       `${this.baseUrl}/property-details`,
//       {
//         headers: this.headers,
//         params: { property_id: propertyId }
//       }
//     );
//   }
// searchProperties(params: any): Observable<any> {
//     return this.http.get(
//       `${this.baseUrl}/search-property`,
//       {
//         headers: this.headers,
//         params
//       }
//     );
//   }



