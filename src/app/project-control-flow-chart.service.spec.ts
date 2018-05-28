import { TestBed, inject } from '@angular/core/testing';

import { ProjectControlFlowChartService } from './project-control-flow-chart.service';

describe('ProjectControlFlowChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectControlFlowChartService]
    });
  });

  it('should be created', inject([ProjectControlFlowChartService], (service: ProjectControlFlowChartService) => {
    expect(service).toBeTruthy();
  }));
});
