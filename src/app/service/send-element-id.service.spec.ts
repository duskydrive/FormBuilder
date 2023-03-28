import { TestBed } from '@angular/core/testing';

import { SendElementIdService } from './send-element-id.service';

describe('SendElementIdService', () => {
  let service: SendElementIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendElementIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
