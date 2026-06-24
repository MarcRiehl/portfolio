import { Injectable, inject } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private projects: ProjectInterface[] = [
    {
      id: '01',
      title: 'Shadow-Path',
      shortDescription: 'Jump & Run Game',
      description: 'portfolio.modal.description-shadow-path',
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
      title: 'Join',
      shortDescription: 'Jump & Run Game',
      description: 'portfolio.modal.description-join',
      previewImage: './assets/img/projects/projects-img/join.png',
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
          name: 'Firebase',
          logo: './assets/img/projects/icons/firebase.svg'
        },
        {
          name: 'Angular',
          logo: './assets/img/projects/icons/angular.svg'
        },
        {
          name: 'TypeScript',
          logo: './assets/img/projects/icons/typescript.svg'
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
