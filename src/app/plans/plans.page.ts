import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
  standalone: false
})
export class PlansPage {

  plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: '',
      description: 'Perfect for casual property searchers',
      features: [
        'Browse all properties',
        'Basic search filters',
        'Save up to 5 favorites',
        'Email notifications',
        'Mobile app access'
      ],
      notIncluded: [
        'Advanced analytics',
        'Priority support',
        'Virtual tours',
        'Market reports'
      ],
      highlighted: false
    },
    {
      name: 'Premium',
      price: 'AED 299',
      period: '/month',
      description: 'For serious buyers and renters',
      features: [
        'Everything in Basic',
        'Advanced search & filters',
        'Unlimited favorites',
        'Priority notifications',
        'Save searches',
        'Virtual tour access',
        'Price drop alerts',
        'Neighborhood insights'
      ],
      notIncluded: [
        'Dedicated agent',
        'Investment reports'
      ],
      highlighted: true
    },
    {
      name: 'Professional',
      price: 'AED 999',
      period: '/month',
      description: 'For real estate professionals',
      features: [
        'Everything in Premium',
        'Dedicated account manager',
        'Advanced market analytics',
        'Investment reports',
        'API access',
        'Bulk operations',
        'White-label options',
        'Custom integrations',
        'Priority listing placement',
        '24/7 premium support'
      ],
      notIncluded: [],
      highlighted: false
    }
  ];

}
