import { TestBed, inject } from '@angular/core/testing';

import { ProjectFetcherService } from './project-fetcher.service';

describe('ProjectFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectFetcherService]
    });
  });

  it('should be created', inject([ProjectFetcherService], (service: ProjectFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
