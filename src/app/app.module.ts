
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EarningsComponent } from "./components/earnings/earnings.component";
import { StockValuationComponent } from "./components/stock-valuation/stock-valuation.component";
import { CoefficientsComponent } from "./components/coefficients/coefficients.component";
import { HistoricalQuotesComponent } from "./components/historical-quotes/historical-quotes.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDividerModule,
        MatTableModule,
        MatToolbarModule,
        EarningsComponent,
        StockValuationComponent,
        CoefficientsComponent,
        HistoricalQuotesComponent
    ]
})
export class AppModule { }
