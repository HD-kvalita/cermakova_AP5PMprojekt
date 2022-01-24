import { TestBed } from '@angular/core/testing';

import { HardwardService } from './hardward.service';

describe('HardwardService', () => {
  let service: HardwardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
