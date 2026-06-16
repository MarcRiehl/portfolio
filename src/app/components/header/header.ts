import { Component } from '@angular/core';
import { Textslider } from '../textslider/textslider';
import { ScrollService } from '../../services/scroll-service';

@Component({
  selector: 'app-header',
  imports: [Textslider],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private scrollService: ScrollService) { }

  scrollToProjects(): void {
    this.scrollService.scrollToSection('projects');
  }

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }

}
