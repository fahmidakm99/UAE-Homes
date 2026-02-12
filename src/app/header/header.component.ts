import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit{

  currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService,
       public themeService: ThemeService,
  ) {
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {}

  toggleLanguage() {
    if (this.currentLang === 'en') {
      this.currentLang = 'ar';
      this.translate.use('ar');
      document.documentElement.dir = 'rtl'; // set RTL for Arabic
    } else {
      this.currentLang = 'en';
      this.translate.use('en');
      document.documentElement.dir = 'ltr'; // set LTR for English
    }
  }

    toggleTheme() {
    this.themeService.toggleTheme();
  }
}