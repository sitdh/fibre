import { TestBed, inject } from '@angular/core/testing';

import { TestSuiteFetcherService } from './test-suite-fetcher.service';

describe('TestSuiteFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestSuiteFetcherService]
    });
  });

  it('should be created', inject([TestSuiteFetcherService], (service: TestSuiteFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
