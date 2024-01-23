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
import { ActivatedRoute } from '@angular/router';

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
    
    constructor(private stockAnalyzerService: StockAnalyzerService, private quoteService: QuoteService, private route: ActivatedRoute) {

    }

    ngOnDestroy(): void {
        this.analyzerSubscription.unsubscribe();
        this.quoteSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
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
                switchMap(() => this.quoteService.getData(this.id))
            ).subscribe( res => { 
                this.quoteData = res
                console.log(this.quoteData)
            })
    }

}
