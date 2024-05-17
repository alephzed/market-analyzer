import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoricalEarnings } from '../models/earningsdata';

@Injectable({
  providedIn: 'root'
})
export class HistoricalEarningsService {

  constructor(private http: HttpClient) { }

  getData(symbol: string): Observable<HistoricalEarnings[]> {
    const url: string = `${environment.apiUrl}/earnings/${symbol}`    
    return this.http.get<HistoricalEarnings[]>(url);
  }
}
