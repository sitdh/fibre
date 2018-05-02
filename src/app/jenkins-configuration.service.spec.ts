import { TestBed, inject } from '@angular/core/testing';

import { JenkinsConfigurationService } from './jenkins-configuration.service';

describe('JenkinsConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JenkinsConfigurationService]
    });
  });

  it('should be created', inject([JenkinsConfigurationService], (service: JenkinsConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
