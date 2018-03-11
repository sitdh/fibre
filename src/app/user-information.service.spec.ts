import { TestBed, inject } from '@angular/core/testing';

import { UserInformationService } from './user-information.service';

describe('UserInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInformationService]
    });
  });

  it('should be created', inject([UserInformationService], (service: UserInformationService) => {
    expect(service).toBeTruthy();
  }));
});
