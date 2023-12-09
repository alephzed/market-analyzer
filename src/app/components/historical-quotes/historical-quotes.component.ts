import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalQuote } from 'src/app/models/valuationdata';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-historical-quotes',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './historical-quotes.component.html',
  styleUrl: './historical-quotes.component.scss'
})
export class HistoricalQuotesComponent {
  public displayedColumns: string[] = ['date', 'price', 'fairvalue', 'dividends', 'earnings', 'rate_gs10'];

  @Input()
  public historicalData! : HistoricalQuote[];


  public getTableData(): HistoricalQuote[] {
    return this.historicalData.reverse();
  }
}
