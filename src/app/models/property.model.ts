export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  purpose: string;
  image: string;
  featured?: boolean;
  description: string;
  amenities: string[];
}

export interface FilterOptions {
  city: string;
  type: string;
  purpose: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  searchQuery: string;
}
