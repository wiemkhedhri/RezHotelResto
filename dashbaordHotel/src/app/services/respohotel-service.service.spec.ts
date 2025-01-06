import { TestBed } from '@angular/core/testing';

import { RespohotelServiceService } from './respohotel-service.service';

describe('RespohotelServiceService', () => {
  let service: RespohotelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespohotelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
