import { TestBed, inject } from '@angular/core/testing';

import { TestPathStepsService } from './test-path-steps.service';

describe('TestPathStepsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestPathStepsService]
    });
  });

  it('should be created', inject([TestPathStepsService], (service: TestPathStepsService) => {
    expect(service).toBeTruthy();
  }));
});
