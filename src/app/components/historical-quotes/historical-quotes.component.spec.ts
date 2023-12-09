import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalQuotesComponent } from './historical-quotes.component';

describe('HistoricalQuotesComponent', () => {
  let component: HistoricalQuotesComponent;
  let fixture: ComponentFixture<HistoricalQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalQuotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
