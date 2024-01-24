
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
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EarningsComponent } from "./components/earnings/earnings.component";
import { StockValuationComponent } from "./components/stock-valuation/stock-valuation.component";
import { CoefficientsComponent } from "./components/coefficients/coefficients.component";
import { HistoricalQuotesComponent } from "./components/historical-quotes/historical-quotes.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import { reducers } from './store/reducers/'
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatSortModule,
        MatTabsModule,
        MatTableModule,
        MatToolbarModule,
        EarningsComponent,
        StockValuationComponent,
        CoefficientsComponent,
        HistoricalQuotesComponent,
        StoreModule.forRoot(
            reducers,
          ),
    ]
})
export class AppModule { }
