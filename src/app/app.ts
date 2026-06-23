import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./layout/footer/footer";
import { TopMenu } from "./layout/top-menu/top-menu";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, TopMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
