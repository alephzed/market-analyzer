import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValuationData } from '../models/valuationdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockAnalyzerService {
  
  constructor(private http: HttpClient) { }

  getData(): Observable<ValuationData> {
    const url = 'http://127.0.0.1:5000/sp-data'    
    return this.http.get<ValuationData>(url);
  }
}
