import { TestBed } from '@angular/core/testing';

import { RetrieveStopsService } from './retrieve-stops.service';

describe('RetrieveStopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieveStopsService = TestBed.get(RetrieveStopsService);
    expect(service).toBeTruthy();
  });
});
