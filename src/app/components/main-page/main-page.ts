import { Component, AfterViewInit  } from '@angular/core';
import { Header } from '../header/header';
import { AboutMe } from '../about-me/about-me';
import { SkillSets } from '../skill-set/skill-set';
import { FeaturedProjects } from '../featured-projects/featured-projects';
import { References } from '../reference/reference';
import { Contact } from '../contact/contact';
import AOS from 'aos';


@Component({
  selector: 'app-main-page',
  imports: [Header, AboutMe, SkillSets, FeaturedProjects, References, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements AfterViewInit {

 ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }
}
