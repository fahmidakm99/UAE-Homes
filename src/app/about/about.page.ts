import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone:false
})
export class AboutPage {

  testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Property Investor",
      image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb",
      content: "UAE Homes helped me find the perfect investment property in Dubai Marina.",
      rating: 5,
    },
    {
      name: "Mohammed Al Mansouri",
      role: "First-Time Buyer",
      image: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23",
      content: "As a first-time buyer, I was overwhelmed by the process. UAE Homes guided me every step.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Expat Renter",
      image: "https://images.unsplash.com/photo-1655249481446-25d575f1c054",
      content: "The virtual tours and detailed listings made it easy to choose from abroad.",
      rating: 5,
    },
  ];

  values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service."
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge technology for real estate."
    },
    {
      title: "Community",
      description: "We build lasting relationships across the UAE."
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty."
    },
  ];

}