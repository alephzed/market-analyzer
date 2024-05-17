
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalQuotesComponent } from './components/historical-quotes/historical-quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EarningsChartComponent } from './components/earnings-chart/earnings-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'historical-data', component: HistoricalQuotesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'earnings', component: EarningsChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }