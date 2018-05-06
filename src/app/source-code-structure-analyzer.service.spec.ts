import { TestBed, inject } from '@angular/core/testing';

import { SourceCodeStructureAnalyzerService } from './source-code-structure-analyzer.service';

describe('SourceCodeStructureAnalyzerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceCodeStructureAnalyzerService]
    });
  });

  it('should be created', inject([SourceCodeStructureAnalyzerService], (service: SourceCodeStructureAnalyzerService) => {
    expect(service).toBeTruthy();
  }));
});
