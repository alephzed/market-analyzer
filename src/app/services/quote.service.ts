import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteData } from '../models/valuationdata';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getData(symbol: string): Observable<QuoteData> {
    const url: string = `${environment.apiUrl}/quote/${symbol}`    
    return this.http.get<QuoteData>(url);
  }
}
