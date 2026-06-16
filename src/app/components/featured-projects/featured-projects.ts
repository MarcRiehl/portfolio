import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project-interface';
import { ProjectService } from '../../services/project-service';
import { ProjectModal } from './project-modal/project-modal';


@Component({
  selector: 'app-featured-projects',
  imports: [ProjectModal],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})

export class FeaturedProjects implements OnInit {

  projects: ProjectInterface[] = [];

  hoveredProject?: ProjectInterface;
  selectedProject!: ProjectInterface;

  modalOpen = false;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();

  }

  setPreview(project: ProjectInterface) {
    this.hoveredProject = project;
  }

  clearPreview() {
  this.hoveredProject = undefined;
}

  openProject(project: ProjectInterface) {
    this.selectedProject = project;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  showNextProject() {
    const currentIndex = this.projects.findIndex(
      p => p.id === this.selectedProject.id
    );

    this.selectedProject =
      this.projects[(currentIndex + 1) % this.projects.length];
  }

  showPreviousProject() {
    const currentIndex = this.projects.findIndex(
      p => p.id === this.selectedProject.id
    );

    this.selectedProject =
      this.projects[
      (currentIndex - 1 + this.projects.length) %
      this.projects.length
      ];
  }
}