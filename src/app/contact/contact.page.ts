import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone:false
})
export class ContactPage {

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'property', label: 'Property Information' },
    { value: 'viewing', label: 'Schedule a Viewing' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunities' }
  ];

  handleSubmit() {
    alert("Thank you for your message! We'll get back to you soon.");
    this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
  }

}