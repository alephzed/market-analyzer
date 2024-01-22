import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalQuote } from 'src/app/models/valuationdata';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HistoricalDataService } from 'src/app/services/historical-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-historical-quotes',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule, MatSortModule],
  templateUrl: './historical-quotes.component.html',
  styleUrl: './historical-quotes.component.scss'
})
export class HistoricalQuotesComponent implements OnInit {
  public displayedColumns: string[] = ['date', 'price', 'fairvalue', 'dividend', 'earnings', 'rate_gs10', 'valuation'];

  public historicalData! : HistoricalQuote[];

  id!: string;

  dataSource = new MatTableDataSource<HistoricalQuote>();

  @ViewChild(MatSort) 
  sort!: MatSort;

  constructor(private historicalDataService: HistoricalDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.historicalDataService.getData(this.id).subscribe( res => {
      this.dataSource.data = res.price_fairvalue;
      this.dataSource.sort = this.sort;
    });
  }

  public getValuation(actual: number, fairvalue: number) : string {
    return ((actual - fairvalue) /fairvalue).toFixed(2);
  }
}
