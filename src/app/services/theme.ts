import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkThemeClass = 'dark-theme';

  constructor() {
    // Initialize theme from localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add(this.darkThemeClass);
    }
  }

  enableDark() {
    document.body.classList.add(this.darkThemeClass);
    localStorage.setItem('theme', 'dark');
  }

  enableLight() {
    document.body.classList.remove(this.darkThemeClass);
    localStorage.setItem('theme', 'light');
  }

  toggleTheme() {
    if (document.body.classList.contains(this.darkThemeClass)) {
      this.enableLight();
    } else {
      this.enableDark();
    }
  }

  isDarkMode() {
    return document.body.classList.contains(this.darkThemeClass);
  }
}
