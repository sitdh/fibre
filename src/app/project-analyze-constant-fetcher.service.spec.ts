import { TestBed, inject } from '@angular/core/testing';

import { ProjectAnalyzeConstantFetcherService } from './project-analyze-constant-fetcher.service';

describe('ProjectAnalyzeConstantFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectAnalyzeConstantFetcherService]
    });
  });

  it('should be created', inject([ProjectAnalyzeConstantFetcherService], (service: ProjectAnalyzeConstantFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
