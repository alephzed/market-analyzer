import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteData } from '../models/valuationdata';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getData(symbol: string): Observable<QuoteData> {
    const url: string = `http://127.0.0.1:5000/quote/${symbol}`    
    return this.http.get<QuoteData>(url);
  }
}
