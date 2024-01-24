import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockValuationComponent } from "../stock-valuation/stock-valuation.component";
import { CoefficientsComponent } from "../coefficients/coefficients.component";
import { EarningsComponent } from "../earnings/earnings.component";
import { StockAnalyzerService } from 'src/app/services/stock-analyzer.service';
import { QuoteService } from 'src/app/services/quote.service';
import { interval } from "rxjs/internal/observable/interval"
import { Subscription, startWith, switchMap } from 'rxjs';
import { QuoteData, ValuationData } from 'src/app/models/valuationdata';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { QuoteState } from 'src/app/store/reducers/quote.reducer';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [CommonModule, StockValuationComponent, CoefficientsComponent, EarningsComponent]
})
export class DashboardComponent implements OnInit, OnDestroy{
    analyzerSubscription!: Subscription;
    quoteSubscription!: Subscription;
    public valuationData!: ValuationData;
    public quoteData!: QuoteData;

    id!: string;
    quoteItem$!: Observable<QuoteState>;
    val!: string;
    
    constructor(private stockAnalyzerService: StockAnalyzerService, private quoteService: QuoteService,
        private store: Store<AppState>) {

    }

    ngOnDestroy(): void {
        this.analyzerSubscription.unsubscribe();
        this.quoteSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.quoteItem$ = this.store.select((store) => store.quote);
        this.quoteItem$.subscribe((s) => {
          this.val = s.quote.name;
        });
        this.analyzerSubscription = interval(5000) 
            .pipe(
                startWith(0),
                switchMap(() => this.stockAnalyzerService.getData())
            ).subscribe( res => { 
                this.valuationData = res
                console.log(this.valuationData)
            })
        this.quoteSubscription = interval(5000) 
            .pipe(
                startWith(0),
                switchMap(() => this.quoteService.getData(this.val))
            ).subscribe( res => { 
                this.quoteData = res
                console.log(this.quoteData)
            })
    }

}
