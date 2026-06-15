import { Component } from '@angular/core';
import {Textslider} from '../textslider/textslider';

@Component({
  selector: 'app-header',
  imports: [Textslider],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
