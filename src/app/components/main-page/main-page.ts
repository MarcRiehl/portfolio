import { Component } from '@angular/core';
import { Header } from '../header/header';
import { AboutMe } from '../about-me/about-me';
import { SkillSets } from '../skill-set/skill-set';
import { FeaturedProjects } from '../featured-projects/featured-projects';
import { References } from '../reference/reference';
import { Contact } from '../contact/contact';
import { Footer } from '../../layout/footer/footer';
import { TopMenu } from '../../layout/top-menu/top-menu';



@Component({
  selector: 'app-main-page',
  imports: [Header, AboutMe, SkillSets, FeaturedProjects, References, Contact, Footer, TopMenu],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
