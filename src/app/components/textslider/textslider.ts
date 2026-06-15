import { Component } from '@angular/core';

@Component({
  selector: 'app-textslider',
  imports: [],
  templateUrl: './textslider.html',
  styleUrl: './textslider.scss',
})
export class Textslider {
  texts: string[] = [
    'Fullstack Developer',
    'Based in Mendig',
    'Open to work',
    'Available for remote work'
  ];
}
