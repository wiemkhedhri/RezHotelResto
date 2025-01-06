import { TestBed } from '@angular/core/testing';

import { ImagehotelservideService } from './imagehotelservide.service';

describe('ImagehotelservideService', () => {
  let service: ImagehotelservideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagehotelservideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
