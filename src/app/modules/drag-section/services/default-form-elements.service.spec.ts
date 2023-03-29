import { TestBed } from '@angular/core/testing';

import { DefaultFormElementsService } from './default-form-elements.service';

describe('DefaultFormElementsService', () => {
  let service: DefaultFormElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultFormElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
