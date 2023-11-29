import { HttpClient } from '@angular/common/http';

import { ValuationData } from './valuationdata';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'market-analyzer';
  public data:any = {}
  public valuationData!: ValuationData;
  constructor(private http: HttpClient) {

  }

  getData() {
    const url = 'http://127.0.0.1:5000/sp-data'    
    // const url = 'https://jsonplaceholder.typicode.com/photos?albumId-1'
    this.http.get<ValuationData>(url).subscribe((res) => {
      this.valuationData = res
      // this.data = res;
      console.log(this.valuationData);
      // console.log(this.data);
    })
  }
}
