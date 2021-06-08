import { TestBed } from '@angular/core/testing';

import { SfPostService } from './sf-post.service';

describe('SfPostService', () => {
  let service: SfPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
