import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalEarningsComponent } from './historical-earnings.component';

describe('HistoricalEarningsComponent', () => {
  let component: HistoricalEarningsComponent;
  let fixture: ComponentFixture<HistoricalEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalEarningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
