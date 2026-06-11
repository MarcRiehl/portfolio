import { Component } from '@angular/core';
import { Header } from '../header/header';
import { AboutMe } from '../about-me/about-me';
import { SkillSet } from '../skill-set/skill-set';
import { FeaturedProjects } from '../featured-projects/featured-projects';
import { Feed } from '../feed/feed';
import { Contact } from '../contact/contact';
import { Footer } from '../../layout/footer/footer';
import { TopMenu } from '../../layout/top-menu/top-menu';

@Component({
  selector: 'app-main-page',
  imports: [Header, AboutMe, SkillSet, FeaturedProjects, Feed, Contact, Footer, TopMenu],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
