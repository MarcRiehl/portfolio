import { Injectable } from '@angular/core';
import { ReferenceInterface } from '../interfaces/reference-interface'

@Injectable({
  providedIn: 'root',
})
export class ReferenceService {
  private references: ReferenceInterface[] = [
    {
      id: '1',
      message: 'Testeintrag 123',
      name: 'Testname'
    },
    {
      id: '2',
      message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Hans Meier'
    }
  ]

  getReferences(): ReferenceInterface[] {
    return this.references;
  }
  
}
