import { Injectable } from '@angular/core';
import { ReferenceInterface } from '../interfaces/reference-interface'

@Injectable({
  providedIn: 'root',
})
export class ReferenceService {
  private references: ReferenceInterface[] = [
    {
      id: '1',
      message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Robert Rankin'
    },
    {
      id: '2',
      message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Douglas Adams'
    },
    {
      id: '3',
      message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Hans Meier'
    }, 
    {
      id: '4',
      message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Hans Meier'
    }, 
    {
      id: '5',
      message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Hans Meier'
    }
  ]

  getReferences(): ReferenceInterface[] {
    return this.references;
  }

}
