import { Component } from '@angular/core';
import { Textslider } from '../textslider/textslider';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [Textslider, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
}
