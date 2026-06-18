import { Component, OnInit } from '@angular/core';
import { ReferenceInterface } from '../../interfaces/reference-interface';
import { ReferenceService } from '../../services/reference-service';
import { SingleReference } from './single-reference/single-reference';

@Component({
  selector: 'app-feed',
  imports: [SingleReference],
  templateUrl: './reference.html',
  styleUrl: './reference.scss',
})
export class References implements OnInit {
  references: ReferenceInterface[] = [];

  currentIndex = 0;

  constructor(private referenceService: ReferenceService) { }

  ngOnInit(): void {
    this.references = this.referenceService.getReferences();
  }

  next(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.references.length;
  }

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length)
      % this.references.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  get currentReference(): ReferenceInterface {
    return this.references[this.currentIndex];
  }
}