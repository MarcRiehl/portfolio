import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

import { ProjectInterface } from '../../../interfaces/project-interface';

@Component({
  selector: 'app-project-modal',
  imports: [],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
})
export class ProjectModal implements AfterViewInit {

  @Input({ required: true })
  project!: ProjectInterface;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  next = new EventEmitter<void>();

  @Output() 
  previous = new EventEmitter<void>();

  @ViewChild('dialog')
  dialog!: ElementRef<HTMLDialogElement>;

  ngAfterViewInit(): void {
  const dialog = this.dialog.nativeElement;

  if (!dialog.open) {
    dialog.showModal();
  }
}

  closeDialog(): void {
    this.dialog.nativeElement.close();
    this.close.emit();
  }

  onDialogClose(): void {
    this.close.emit();
  }
}