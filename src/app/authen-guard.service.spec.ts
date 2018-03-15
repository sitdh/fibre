import { TestBed, inject } from '@angular/core/testing';

import { AuthenGuardService } from './authen-guard.service';

describe('AuthenGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenGuardService]
    });
  });

  it('should be created', inject([AuthenGuardService], (service: AuthenGuardService) => {
    expect(service).toBeTruthy();
  }));
});
