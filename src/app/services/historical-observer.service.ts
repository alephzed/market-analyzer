import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricalObserverService {
  private historicalData$ = new BehaviorSubject<any>({});
  selectedHistoricalData$ = this.historicalData$.asObservable();

  constructor() { }

  setHistoricalData(historicalData: any) {
    this.historicalData$.next(historicalData);
  }
}
