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
  public valuationData!: ValuationData;

  constructor(private http: HttpClient) {

  }

  public ngOnInit(): void {
    const url = 'http://127.0.0.1:5000/sp-data'    
    this.http.get<ValuationData>(url).subscribe((res) => {
      this.valuationData = res
      console.log(this.valuationData);
    })
  }

  getData() {
    const url = 'http://127.0.0.1:5000/sp-data'    
    this.http.get<ValuationData>(url).subscribe((res) => {
      this.valuationData = res
      console.log(this.valuationData);
    })
  }
}
