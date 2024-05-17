import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Observable } from 'rxjs';
import { HistoricalEarnings } from 'src/app/models/earningsdata';
import { HistoricalEarningsService } from 'src/app/services/historical-earnings.service';
import { AppState } from 'src/app/store/reducers';
import { QuoteState } from 'src/app/store/reducers/quote.reducer';

@Component({
  selector: 'app-earnings-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './earnings-chart.component.html',
  styleUrl: './earnings-chart.component.scss'
})
export class EarningsChartComponent implements OnInit {

  quoteItem$!: Observable<QuoteState>;
  val!: string;

  historicalEarnings!: HistoricalEarnings[];

  constructor(private earningsService: HistoricalEarningsService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.quoteItem$ = this.store.select((store) => store.quote);
    this.quoteItem$.subscribe((s) => {
      this.val = s.quote.name;
    });
    this.earningsService.getData(this.val).subscribe( res => {
      this.historicalEarnings = res;
      console.log(this.historicalEarnings);
    });
  }

  options: EChartsOption = {
    title: {
      text: 'Dividends Trends'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Trailing Earnings', 'Blended Earnings', 'Future Earnings', 'Max Earnings', 'Actual Earnings', 'Dividends']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Trailing Earnings',
        type: 'line',
        stack: 'Total',
        data: []
      },
      {
        name: 'Blended Earnings',
        type: 'line',
        stack: 'Total',
        data: []
      },
      {
        name: 'Future Earnings',
        type: 'line',
        stack: 'Total',
        data: []
      },
      {
        name: 'Max Earnings',
        type: 'line',
        stack: 'Total',
        data: []
      },
      {
        name: 'Actual Earnings',
        type: 'line',
        stack: 'Total',
        data: []
      },
      {
        name: 'Dividends',
        type: 'line',
        stack: 'Total',
        data: []
      }
    ]
  };

  setChartParams(): any {
    this.options.xAxis =  {
      type: 'category',
      boundaryGap: false,
      data: this.getDates()
    };
    this.options.series =  [{
        name: 'Trailing Earnings',
        data: this.getTrailingEarnings(),
        type: 'line'
      },
      {
        name: 'Blended Earnings',
        data: this.getBlendedEarnings(),
        type: 'line'
      },
      {
        name: 'Future Earnings',
        data: this.getFutureEarnings(),
        type: 'line'
      },
      {
        name: 'Max Earnings',
        data: this.getMaxEarnings(),
        type: 'line'
      },
      {
        name: 'Dividends',
        data: this.getDividends(),
        type: 'line'
      }];
    return this.options;
  }


  getTrailingEarnings(): string[] {
    return this.historicalEarnings.map(s => s.calculated_earnings.toFixed(2));
  }

  getFutureEarnings(): string[] {
    return this.historicalEarnings.map(s => s.future_earnings.toFixed(2));
  }

  getBlendedEarnings(): string[] {
    return this.historicalEarnings.map(s => s.blended_earnings.toFixed(2));
  }

  getMaxEarnings(): string[] {
    return this.historicalEarnings.map(s => s.max_earnings.toFixed(2));
  }

  getDates(): string[] {
    return this.historicalEarnings.map( s=> s.event_time);
  }

  getDividends(): string[] {
    return this.historicalEarnings.map( s=> s.dividend.toFixed(2));
  }
}
