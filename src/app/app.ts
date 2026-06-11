import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { AboutMe } from './components/about-me/about-me';
import { SkillSet } from './components/skill-set/skill-set';
import { FeaturedProjects } from './components/featured-projects/featured-projects';
import { Feed } from './components/feed/feed';
import { Contact } from './components/contact/contact';
import { Footer } from './layout/footer/footer';
import { TopMenu } from './layout/top-menu/top-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AboutMe, SkillSet, FeaturedProjects, Feed, Contact, Footer, TopMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
