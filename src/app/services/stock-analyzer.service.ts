import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValuationData } from '../models/valuationdata';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockAnalyzerService {
  
  constructor(private http: HttpClient) { }

  getData(): Observable<ValuationData> {
    const url = `${environment.apiUrl}/sp-data`   
    return this.http.get<ValuationData>(url);
  }
}
