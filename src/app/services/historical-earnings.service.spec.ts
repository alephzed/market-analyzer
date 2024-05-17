import { TestBed } from '@angular/core/testing';

import { HistoricalEarningsService } from './historical-earnings.service';

describe('HistoricalEarningsService', () => {
  let service: HistoricalEarningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalEarningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
