import { TestBed } from '@angular/core/testing';

import { HistoricalObserverService } from './historical-observer.service';

describe('HistoricalObserverService', () => {
  let service: HistoricalObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
