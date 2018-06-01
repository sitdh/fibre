import { TestBed, inject } from '@angular/core/testing';

import { TestCaseFetchInformationService } from './test-case-fetch-information.service';

describe('TestCaseFetchInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestCaseFetchInformationService]
    });
  });

  it('should be created', inject([TestCaseFetchInformationService], (service: TestCaseFetchInformationService) => {
    expect(service).toBeTruthy();
  }));
});
