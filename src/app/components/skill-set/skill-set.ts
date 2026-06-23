import { Component } from '@angular/core';
import { SkillSet } from '../../interfaces/skill-set-interface';
import { RouterLink } from '@angular/router'


@Component({
  selector: 'app-skill-set',
  imports: [RouterLink],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})

export class SkillSets {

  skills: SkillSet[] =
    [
      {
        img: './assets/img/skill-set/icons/html.svg',
        name: 'Html'
      },
      {
        img: './assets/img/skill-set/icons/css.svg',
        name: 'CSS'
      },
      {
        img: './assets/img/skill-set/icons/javascript.svg',
        name: 'Javascript'
      },
      {
        img: './assets/img/skill-set/icons/typescript.svg',
        name: 'TypeScript'
      },
      {
        img: './assets/img/skill-set/icons/angular.svg',
        name: 'Angular'
      },
      {
        img: './assets/img/skill-set/icons/supabase.svg',
        name: 'Supabase'
      },
      {
        img: './assets/img/skill-set/icons/git.svg',
        name: 'Git'
      },
      {
        img: './assets/img/skill-set/icons/rest-api.svg',
        name: 'REST-API'
      },
      {
        img: './assets/img/skill-set/icons/python.svg',
        name: 'Python'
      },
      {
        img: './assets/img/skill-set/icons/django.svg',
        name: 'Django'
      },
      {
        img: './assets/img/skill-set/icons/linux.svg',
        name: 'Linux'
      },
      {
        img: './assets/img/skill-set/icons/growthmindset.svg',
        name: 'Growth mindset',
        bubble: {
          text: 'I have a special interest in learning',
          img1: './assets/img/skill-set/icons/react-blue.svg',
          img2: './assets/img/skill-set/icons/three-js.svg',
          name1:'React',
          name2: 'Three.js'
        }
      },
    ]
}
