import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textslider } from './textslider';

describe('Textslider', () => {
  let component: Textslider;
  let fixture: ComponentFixture<Textslider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textslider],
    }).compileComponents();

    fixture = TestBed.createComponent(Textslider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
