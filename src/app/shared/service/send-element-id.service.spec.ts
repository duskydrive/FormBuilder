import { TestBed } from '@angular/core/testing';

import { SendElementIdService } from './send-element-id.service';

describe('SendElementIdService', () => {
  let service: SendElementIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SendElementIdService]});
    service = TestBed.inject(SendElementIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('passes value as an observable', () => {
    service.passId('uniqId');
    service.share.subscribe( (res)=> {
      expect(res).toEqual('uniqId')
    })
  });
});
