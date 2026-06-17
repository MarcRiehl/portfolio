import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface'

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: ProjectInterface[] = [
    {
      id: '01',
      title: 'Shadow-Path',
      shortDescription: 'Jump & Run Game',
      description:
        '2D Browsergame with Canvas API and JavaScript.',
      previewImage: './assets/img/projects/projects-img/project-shadow-path.jpg',
      url: '',
      github: '',
      technologies: [
        {
          name: 'HTML',
          logo: './assets/img/projects/icons/html.svg'
        },
        {
          name: 'CSS',
          logo: './assets/img/projects/icons/css.svg'
        },
        {
          name: 'Javascript',
          logo: './assets/img/projects/icons/javascript.svg'
        }
      ]
    },
       {
      id: '02',
      title: 'Pokedex',
      shortDescription: 'Jump & Run Game',
      description:
        '2D Browsergame with Canvas API and JavaScript.',
      previewImage: './assets/img/projects/projects-img/pokedex.jpg',
      url: '',
      github: '',
      technologies: [
        {
          name: 'HTML',
          logo: './assets/img/projects/icons/html.svg'
        },
        {
          name: 'CSS',
          logo: './assets/img/projects/icons/css.svg'
        },
        {
          name: 'Javascript',
          logo: './assets/img/projects/icons/javascript.svg'
        }
      ]
    }
  ];

  getProjects(): ProjectInterface[] {
    return this.projects;
  }

  getProjectById(id: string): ProjectInterface | undefined {
    return this.projects.find(project => project.id === id);
  }
}
