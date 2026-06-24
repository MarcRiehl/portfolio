import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-textslider',
  imports: [TranslatePipe],
  templateUrl: './textslider.html',
  styleUrl: './textslider.scss',
})
export class Textslider {
  texts: string[] = [
    'textslider.developer',
    'textslider.based',
    'textslider.available',
    'textslider.work'
  ];
}
