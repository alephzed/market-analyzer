import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';


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
export class HistoricalChartComponent {

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

  @Input()
  dates: any;

  @Input()
  fairvalues: any;

  @Input()
  actualPrices: any;

  setChartParams(): any {
    this.options.xAxis =  {
      type: 'category',
      boundaryGap: false,
      data: this.dates
    };
    this.options.series =  [{
        name: 'FairValue',
        data: this.fairvalues,
        type: 'line',
        areaStyle: {}
      },
      {
        name: 'Actual',
        data: this.actualPrices,
        type: 'line',
        areaStyle: {}
      }];
    return this.options;
  }
}
