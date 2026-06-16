import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll-service';

@Component({
  selector: 'app-top-menu',
  imports: [],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss',
})

export class TopMenu {
  constructor(private scrollService: ScrollService) { }

  scrollToAbout(): void {
    this.scrollService.scrollToSection('about');
  }

  scrollToSkills(): void {
    this.scrollService.scrollToSection('skills');
  }

  scrollToProjects(): void {
    this.scrollService.scrollToSection('projects');
  }

}
