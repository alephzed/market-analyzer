import { Component, OnChanges, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { EarningsChartComponent } from '../earnings-chart/earnings-chart.component'; // Adjust the path as needed
import { Observable } from 'rxjs';
import { QuoteState } from 'src/app/store/reducers/quote.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { HistoricalEarningsService } from 'src/app/services/historical-earnings.service';
import { HistoricalEarnings } from 'src/app/models/earningsdata';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EarningsObserverService } from 'src/app/services/earnings-observer.service';


@Component({
  selector: 'app-historical-earnings',
  standalone: true,
  imports: [MatTabsModule, MatTableModule, EarningsChartComponent],
  templateUrl: './historical-earnings.component.html',
  styleUrl: './historical-earnings.component.scss'
})
export class HistoricalEarningsComponent implements OnInit, OnChanges {
  public displayedColumns: string[] = ['date', 'calculated_earnings', 'future_earnings', 'blended_earnings', 'max_earnings'];

  quoteItem$!: Observable<QuoteState>;
  val!: string;
  historicalEarnings!: HistoricalEarnings[];
  dataSource = new MatTableDataSource<HistoricalEarnings>();

  
  constructor(private earningsService: HistoricalEarningsService, private store: Store<AppState>, private earningsObserverService: EarningsObserverService) { }

  ngOnInit(): void {
    this.quoteItem$ = this.store.select((store) => store.quote);
    this.quoteItem$.subscribe((s) => {
      this.val = s.quote.name;
    });
    this.earningsService.getData(this.val).subscribe( res => {
      this.historicalEarnings = res;
      this.dataSource.data = this.historicalEarnings;
      this.earningsObserverService.setEarningsData(this.historicalEarnings);
    });
  }

  ngOnChanges(): void {
    // Implement this method
    this.earningsObserverService.setEarningsData(this.dataSource.data)
  }

}
