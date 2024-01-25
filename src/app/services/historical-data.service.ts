import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricalQuoteData } from '../models/valuationdata';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoricalDataService {

  constructor(private http: HttpClient) { }

  getData(symbol: string): Observable<HistoricalQuoteData> {
    const url: string = `${environment.apiUrl}/historical-data/${symbol}`    
    return this.http.get<HistoricalQuoteData>(url);
  }
}
