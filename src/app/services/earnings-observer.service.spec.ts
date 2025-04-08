import { TestBed } from '@angular/core/testing';

import { EarningsObserverService } from './earnings-observer.service';

describe('EarningsObserverService', () => {
  let service: EarningsObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarningsObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
