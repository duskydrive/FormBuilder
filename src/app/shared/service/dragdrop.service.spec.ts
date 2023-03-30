import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DragdropService } from './dragdrop.service';

describe('DragdropService', () => {
  let service: DragdropService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore({}) ],
    });
    service = TestBed.inject(DragdropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
