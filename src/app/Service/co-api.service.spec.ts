import { TestBed } from '@angular/core/testing';

import { CoApiService } from './co-api.service';

describe('CoApiService', () => {
  let service: CoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
