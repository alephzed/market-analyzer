import { HistoricalQuote, ValuationData } from './models/valuationdata';
import { Component, OnInit } from '@angular/core';
import { StockAnalyzerService } from './services/stock-analyzer.service';
// import { Subscription } from 'rxjs';
// import { interval } from "rxjs/internal/observable/interval"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // timeInterval!: Subscription;
  title = 'market-analyzer';
  public valuationData!: ValuationData;

  constructor(private stockAnalyzerService: StockAnalyzerService) {

  }

  public ngOnInit(): void {  
    // this.timeInterval = interval(5000) 
    this.stockAnalyzerService.getData().subscribe((res) => {
      this.valuationData = res
      console.log(this.valuationData);
    })
  }

}
