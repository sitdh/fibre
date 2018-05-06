import { TestBed, inject } from '@angular/core/testing';

import { ProjectBuildInformationService } from './project-build-information.service';

describe('ProjectBuildInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectBuildInformationService]
    });
  });

  it('should be created', inject([ProjectBuildInformationService], (service: ProjectBuildInformationService) => {
    expect(service).toBeTruthy();
  }));
});
