import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { HistoricalQuote } from 'src/app/models/valuationdata';
import { HistoricalObserverService } from 'src/app/services/historical-observer.service';


@Component({
  selector: 'app-historical-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './historical-chart.component.html',
  styleUrl: './historical-chart.component.scss',
  providers: [
    provideEcharts(),
  ],
})
export class HistoricalChartComponent implements OnInit {

  options: EChartsOption = {
    title: {
      left: 'center',
      text: 'Historical Market Returns',
      subtext: 'Real vs Fair Value'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      bottom: 80
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: []
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [
      {
        type: 'inside',
        start: 75,
        end: 100
      },
      {
        type: 'slider',
      }
    ],
    series: [{
      name: 'FairValue',
      data: [],
      type: 'line',
      areaStyle: {}
    },
    {
      name: 'Actual',
      data: [],
      type: 'line',
      areaStyle: {}
    }]
  };

  fairValueData!: HistoricalQuote[];

  constructor(private historicalObserverService: HistoricalObserverService) {}

  ngOnInit(): void {
      this.historicalObserverService.selectedHistoricalData$.subscribe((value) => {
      this.fairValueData = value;
      console.log(value)
    })
  }

  setChartParams(): any {
    this.options.xAxis =  {
      type: 'category',
      boundaryGap: false,
      data: this.getDates()
    };
    this.options.series =  [{
        name: 'FairValue',
        data: this.getFairValues(),
        // data: this.fairvalues,
        type: 'line',
        areaStyle: {}
      },
      {
        name: 'Actual',
        data: this.getActualPrices(),
        type: 'line',
        areaStyle: {}
      }];
    return this.options;
  }

  getFairValues(): number[] {
    return this.fairValueData.map(s => s.fairvalue);
  }

  getDates(): string[] {
    return this.fairValueData.map( s=> s.date);
  }

  getActualPrices(): number[] {
    return this.fairValueData.map(s => s.price);
  }
}

