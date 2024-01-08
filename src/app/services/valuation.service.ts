import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuationService {
  private quote$ = new BehaviorSubject<any>({});
  selectedQuote$ = this.quote$.asObservable();

  constructor() { }

  setQuote(quote: any) {
    this.quote$.next(quote);
  }
}
