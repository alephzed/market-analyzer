import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricalQuoteData } from '../models/valuationdata';

@Injectable({
  providedIn: 'root'
})
export class HistoricalDataService {

  constructor(private http: HttpClient) { }

  getData(symbol: string): Observable<HistoricalQuoteData> {
    const url: string = `http://127.0.0.1:5000/historical-data/${symbol}`    
    return this.http.get<HistoricalQuoteData>(url);
  }
}
