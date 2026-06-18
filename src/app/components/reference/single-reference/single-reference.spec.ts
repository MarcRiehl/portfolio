import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleReference } from './single-reference';

describe('SingleReference', () => {
  let component: SingleReference;
  let fixture: ComponentFixture<SingleReference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleReference],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleReference);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
