import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalQuote } from 'src/app/models/valuationdata';
import { MatTableModule } from '@angular/material/table';
import { HistoricalDataService } from 'src/app/services/historical-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historical-quotes',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './historical-quotes.component.html',
  styleUrl: './historical-quotes.component.scss'
})
export class HistoricalQuotesComponent implements OnInit {
  public displayedColumns: string[] = ['date', 'price', 'fairvalue', 'dividends', 'earnings', 'rate_gs10', 'valuation'];

  public historicalData! : HistoricalQuote[];

  id!: string;

  constructor(private historicalDataService: HistoricalDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.historicalDataService.getData(this.id).subscribe( res => {
      this.historicalData = res.price_fairvalue;
    });
  }

  public getTableData(): HistoricalQuote[] {
    return this.historicalData.reverse();
  }

  public getValuation(actual: number, fairvalue: number) : string {
    return ((actual - fairvalue) /fairvalue).toFixed(2);
  }
}
