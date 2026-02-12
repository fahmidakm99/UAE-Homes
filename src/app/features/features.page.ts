import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.page.html',
  styleUrls: ['./features.page.scss'],
  standalone: false
})
export class FeaturesPage {

  features: Feature[] = [
    {
      icon: 'search-outline',
      title: 'Advanced Search',
      description: 'Find your perfect property with powerful filters including location, price, property type, and amenities.',
    },
    {
      icon: 'location-outline',
      title: 'Interactive Maps',
      description: 'Explore properties with integrated maps showing nearby schools, hospitals, and transport.',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Verified Listings',
      description: 'All properties are verified to ensure accuracy and legitimacy.',
    },
    {
      icon: 'notifications-outline',
      title: 'Smart Alerts',
      description: 'Get instant notifications when new matching properties are listed.',
    },
    {
      icon: 'trending-up-outline',
      title: 'Market Insights',
      description: 'Access real-time market trends and price analytics.',
    },
    {
      icon: 'camera-outline',
      title: 'Virtual Tours',
      description: 'Experience properties with 360° virtual tours and HD images.',
    },
    {
      icon: 'people-outline',
      title: 'Expert Agents',
      description: 'Connect with certified real estate professionals.',
    },
    {
      icon: 'headset-outline',
      title: '24/7 Support',
      description: 'Our support team is available round the clock.',
    },
  ];
}
