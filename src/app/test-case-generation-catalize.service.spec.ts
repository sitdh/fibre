import { TestBed, inject } from '@angular/core/testing';

import { TestCaseGenerationCatalizeService } from './test-case-generation-catalize.service';

describe('TestCaseGenerationCatalizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestCaseGenerationCatalizeService]
    });
  });

  it('should be created', inject([TestCaseGenerationCatalizeService], (service: TestCaseGenerationCatalizeService) => {
    expect(service).toBeTruthy();
  }));
});
