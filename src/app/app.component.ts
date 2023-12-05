import { ValuationData } from './valuationdata';
import { Component } from '@angular/core';
import { StockAnalyzerService } from './services/stock-analyzer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'market-analyzer';
  public valuationData!: ValuationData;

  constructor(private stockAnalyzerService: StockAnalyzerService) {

  }

  public ngOnInit(): void {   
    this.stockAnalyzerService.getData().subscribe((res) => {
      this.valuationData = res
      console.log(this.valuationData);
    })
  }
}
