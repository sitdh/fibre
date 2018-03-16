import { TestBed, inject } from '@angular/core/testing';

import { ApplConfigService } from './appl-config.service';

describe('ApplConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplConfigService]
    });
  });

  it('should be created', inject([ApplConfigService], (service: ApplConfigService) => {
    expect(service).toBeTruthy();
  }));
});
