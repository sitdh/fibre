import { TestBed, inject } from '@angular/core/testing';

import { TestReportService } from './test-report.service';

describe('TestReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestReportService]
    });
  });

  it('should be created', inject([TestReportService], (service: TestReportService) => {
    expect(service).toBeTruthy();
  }));
});
