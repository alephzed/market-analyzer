import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalQuote } from 'src/app/models/valuationdata';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HistoricalDataService } from 'src/app/services/historical-data.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
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
    imports: [CommonModule, MatTableModule, MatTabsModule, MatSortModule, MatPaginatorModule, HistoricalChartComponent]
})
export class HistoricalQuotesComponent implements OnInit, OnChanges {
  public displayedColumns: string[] = ['date', 'price', 'fairvalue', 'dividend', 'earnings', 'rate_gs10', 'valuation', 'actualprice', 'actualdividend', 'actualearnings'];

  public historicalData! : HistoricalQuote[];

  quoteItem$!: Observable<QuoteState>;
  val!: string;

  dataSource = new MatTableDataSource<HistoricalQuote>();

   sort!: MatSort;

  @ViewChild(MatSort) 
  set matSort(ms: MatSort) {
    this.sort = ms;
    this.sort.direction = 'desc';
    this.sort.active = 'date';
    this.setDataSourceAttributes();
  }
 
  @ViewChild('paginator')
  set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  
  paginator!: MatPaginator;

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }   

  constructor(private historicalDataService: HistoricalDataService, private store: Store<AppState>, private historicalObserverService: HistoricalObserverService) {}

  ngOnInit(): void {
    this.quoteItem$ = this.store.select((store) => store.quote);
    this.quoteItem$.subscribe((s) => {
      this.val = s.quote.name;
    });
    this.historicalDataService.getData(this.val).subscribe( res => {
      this.dataSource.data = res.price_fairvalue;
      this.historicalObserverService.setHistoricalData(res.price_fairvalue);
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    this.historicalObserverService.setHistoricalData(this.dataSource.data);
  }
}
