import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EarningsObserverService {
  private earningsData$ = new BehaviorSubject<any>({});
  selectedEarningsData$ = this.earningsData$.asObservable();
  constructor() { }

  setEarningsData(earningsData: any) {
    this.earningsData$.next(earningsData);
  }
}
