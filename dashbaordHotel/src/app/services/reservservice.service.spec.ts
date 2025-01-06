import { TestBed } from '@angular/core/testing';

import { ReservserviceService } from './reservservice.service';

describe('ReservserviceService', () => {
  let service: ReservserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
