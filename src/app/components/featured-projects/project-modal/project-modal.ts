import {
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

export class ProjectModal {

  @Input({ required: true })
  project!: ProjectInterface;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  next = new EventEmitter<void>();

  @Output()
  previous = new EventEmitter<void>();

  private dialogElement?: HTMLDialogElement;

  @ViewChild('dialog')
  set dialogRef(dialog: ElementRef<HTMLDialogElement> | undefined) {

    if (!dialog) return;

    this.dialogElement = dialog.nativeElement;

    if (!this.dialogElement.open) {
      this.dialogElement.showModal();
    }
  }

  closeDialog(): void {
    this.dialogElement?.close();
    this.close.emit();
  }

  onDialogClose(): void {
    this.close.emit();
  }
}