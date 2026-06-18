import { Component, Input } from '@angular/core';
import { ReferenceInterface } from '../../../interfaces/reference-interface';

@Component({
  selector: 'app-single-reference',
  templateUrl: './single-reference.html',
  styleUrl: './single-reference.scss',
})
export class SingleReference {
  @Input({ required: true })
  reference!: ReferenceInterface;
  
    @Input()
  isActive = false;
}