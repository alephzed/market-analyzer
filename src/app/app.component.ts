import { HistoricalQuote, MarketData, QuoteData, ValuationData } from './models/valuationdata';
import { Component, OnInit } from '@angular/core';
import { StockAnalyzerService } from './services/stock-analyzer.service';
import { Subscription, startWith, switchMap } from 'rxjs';
import { interval } from "rxjs/internal/observable/interval"
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  timeInterval!: Subscription;
  title = 'market-analyzer';
  public valuationData!: ValuationData;
  public quoteData!: QuoteData;

  constructor(private stockAnalyzerService: StockAnalyzerService, private quoteService: QuoteService) {

  }

  public ngOnInit(): void {  
    this.timeInterval = interval(5000) 
    .pipe(
      startWith(0),
      switchMap(() => this.stockAnalyzerService.getData())
    ).subscribe( res => { 
      this.valuationData = res
      console.log(this.valuationData)
    })
    this.timeInterval = interval(5000) 
    .pipe(
      startWith(0),
      switchMap(() => this.quoteService.getData('GSPC'))
    ).subscribe( res => { 
      this.quoteData = res
      console.log(this.quoteData)
    })
  }

}
