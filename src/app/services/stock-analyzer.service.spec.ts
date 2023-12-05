import { TestBed } from '@angular/core/testing';

import { StockAnalyzerService } from './stock-analyzer.service';

describe('StockAnalyzerService', () => {
  let service: StockAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
