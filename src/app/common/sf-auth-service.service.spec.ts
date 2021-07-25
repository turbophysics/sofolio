import { TestBed } from '@angular/core/testing';

import { SfAuthService } from './sf-auth.service';

describe('SfAuthServiceService', () => {
  let service: SfAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
