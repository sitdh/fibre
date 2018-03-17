import { TestBed, inject } from '@angular/core/testing';

import { CredentailService } from './credentail.service';

describe('CredentailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredentailService]
    });
  });

  it('should be created', inject([CredentailService], (service: CredentailService) => {
    expect(service).toBeTruthy();
  }));
});
