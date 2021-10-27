import { TestBed } from '@angular/core/testing';

import { RijksDataService } from './rijks-data.service';

describe('RijksDataService', () => {
  let service: RijksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RijksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
