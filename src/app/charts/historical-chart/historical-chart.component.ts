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
      },
      formatter: (params: any) => {
        console.log(params);
        return `
                  <span style="float: left">${params[0].marker} ${params[0].seriesName}:</span><span style="float: right; margin-left: 20px">${(params[0].value).toFixed(2)}</span><br />
                  <span style="float: left">${params[1].marker} ${params[1].seriesName}:</span><span style="float: right; margin-left: 20px">${(params[1].value).toFixed(2)}</span><br />
                  <span style="float: left">valuation:</span><span style="float: right; margin-left: 20px">${((1 - params[0].value/params[1].value) * 100).toFixed(2)}%</span>
                  `;
      },
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

