import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project-interface';
import { ProjectService } from '../../services/project-service';
import { ProjectModal } from './project-modal/project-modal';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-featured-projects',
  imports: [ProjectModal,TranslatePipe],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})

export class FeaturedProjects implements OnInit {

  projects: ProjectInterface[] = [];

  hoveredProject?: ProjectInterface;
  selectedProject!: ProjectInterface;

  @ViewChild('wrapper')
  wrapper!: ElementRef<HTMLElement>;

  previewTop = 0;

  modalOpen = false;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();

  }

  setPreview(project: ProjectInterface, element: HTMLElement) {
    this.hoveredProject = project;

    const itemRect = element.getBoundingClientRect();
    const wrapperRect = this.wrapper.nativeElement.getBoundingClientRect();

    this.previewTop =
      itemRect.top -
      wrapperRect.top +
      itemRect.height / 2 -
      48;
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