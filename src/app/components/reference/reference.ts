import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef, 
  NgZone
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
    private referenceService: ReferenceService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
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

      const updateIndex = () => {
        this.ngZone.run(() => {
          this.currentIndex = this.emblaApi!.selectedScrollSnap();
          this.cdr.detectChanges();
        });
      };

      this.emblaApi.on('select', updateIndex);
      this.emblaApi.on('settle', updateIndex);
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