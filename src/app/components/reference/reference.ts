import { Component, OnInit } from '@angular/core';
import { ReferenceInterface } from '../../interfaces/reference-interface';
import { ReferenceService } from '../../services/reference-service';
import { SingleReference } from './single-reference/single-reference';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-feed',
  imports: [SingleReference, TranslatePipe],
  templateUrl: './reference.html',
  styleUrl: './reference.scss',
})
export class References implements OnInit {
  references: ReferenceInterface[] = [];

  currentIndex = 1;
  disableTransition = false;

  constructor(private referenceService: ReferenceService) { }

  ngOnInit(): void {
    this.references = this.referenceService.getReferences();
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) %
      this.references.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getTransform(): string {
    return `translateX(calc(20% - ${this.currentIndex * 60}%))`;
  }
}