import { TestBed } from '@angular/core/testing';

import { AccordionManipulatorService } from './accordion-manipulator.service';

describe('AccordionManipulatorService', () => {
  let service: AccordionManipulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccordionManipulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
