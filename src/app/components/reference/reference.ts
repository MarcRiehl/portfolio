import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';

import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel';

import { TranslatePipe } from '@ngx-translate/core';

import { ReferenceInterface } from '../../interfaces/reference-interface';
import { ReferenceService } from '../../services/reference-service';
import { SingleReference } from './single-reference/single-reference';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    SingleReference,
    TranslatePipe,
  ],
  templateUrl: './reference.html',
  styleUrl: './reference.scss',
})
export class References implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('emblaViewport')
  emblaViewport!: ElementRef<HTMLDivElement>;

  references: ReferenceInterface[] = [];

  currentIndex = 0;

  private emblaApi?: EmblaCarouselType;

  private options: EmblaOptionsType = {
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    duration: 30,
  };

  constructor(
    private referenceService: ReferenceService
  ) { }

  ngOnInit(): void {
    this.references = this.referenceService.getReferences();
  }

  ngAfterViewInit(): void {

    queueMicrotask(() => {

      this.emblaApi = EmblaCarousel(
        this.emblaViewport.nativeElement,
        this.options
      );

      this.currentIndex = this.emblaApi.selectedScrollSnap();

      this.emblaApi.on('select', () => {
        this.currentIndex = this.emblaApi!.selectedScrollSnap();
      });

    });

  }

  previous(): void {
    this.emblaApi?.scrollPrev();
  }

  next(): void {
    this.emblaApi?.scrollNext();
  }

  goToSlide(index: number): void {
    this.emblaApi?.scrollTo(index);
  }

  ngOnDestroy(): void {
    this.emblaApi?.destroy();
  }

}