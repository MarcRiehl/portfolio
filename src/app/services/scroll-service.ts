import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService { 
  scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
