import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalQuote } from 'src/app/models/valuationdata';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HistoricalDataService } from 'src/app/services/historical-data.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { QuoteState } from 'src/app/store/reducers/quote.reducer';
import { HistoricalChartComponent } from "../../charts/historical-chart/historical-chart.component";
import { HistoricalObserverService } from 'src/app/services/historical-observer.service';

@Component({
    selector: 'app-historical-quotes',
    standalone: true,
    templateUrl: './historical-quotes.component.html',
    styleUrl: './historical-quotes.component.scss',
    imports: [CommonModule, MatTableModule, MatTabsModule, MatSortModule, HistoricalChartComponent]
})
export class HistoricalQuotesComponent implements OnInit, OnChanges {
  public displayedColumns: string[] = ['date', 'price', 'fairvalue', 'dividend', 'earnings', 'rate_gs10', 'valuation', 'actualprice', 'actualdividend', 'actualearnings'];

  public historicalData! : HistoricalQuote[];

  quoteItem$!: Observable<QuoteState>;
  val!: string;

  dataSource = new MatTableDataSource<HistoricalQuote>();

  @ViewChild(MatSort) 
  sort!: MatSort;

  constructor(private historicalDataService: HistoricalDataService, private store: Store<AppState>, private historicalObserverService: HistoricalObserverService) {}

  ngOnInit(): void {
    this.quoteItem$ = this.store.select((store) => store.quote);
    this.quoteItem$.subscribe((s) => {
      this.val = s.quote.name;
    });
    this.historicalDataService.getData(this.val).subscribe( res => {
      this.dataSource.data = res.price_fairvalue;
      this.dataSource.sort = this.sort;
      this.historicalObserverService.setHistoricalData(res.price_fairvalue);
    });

  }

  ngOnChanges(): void {
    this.historicalObserverService.setHistoricalData(this.dataSource.data);
  }

  public getValuation(actual: number, fairvalue: number) : string {
    return ((actual - fairvalue) /fairvalue).toFixed(2);
  }
}
