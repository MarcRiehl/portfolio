import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  imports: [],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss',
})

export class TopMenu {
  scrollToSection(id: string) {
  // console.log('Scroll zu:', id);
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}
}
