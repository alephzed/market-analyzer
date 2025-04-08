import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
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
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-historical-earnings',
  standalone: true,
  imports: [MatTabsModule, MatTableModule, MatSortModule, MatPaginatorModule, EarningsChartComponent],
  templateUrl: './historical-earnings.component.html',
  styleUrl: './historical-earnings.component.scss'
})
export class HistoricalEarningsComponent implements OnInit, OnChanges {
  public displayedColumns: string[] = ['event_time', 'calculated_earnings', 'future_earnings', 'blended_earnings', 'max_earnings'];

  quoteItem$!: Observable<QuoteState>;
  val!: string;
  historicalEarnings!: HistoricalEarnings[];
  dataSource = new MatTableDataSource<HistoricalEarnings>();

  sort!: MatSort;
  
  @ViewChild(MatSort) 
  set matSort(ms: MatSort) {
    this.sort = ms;
    this.sort.direction = 'desc';
    this.sort.active = 'event_time';
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
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    // Implement this method
    this.earningsObserverService.setEarningsData(this.dataSource.data)
  }

}
