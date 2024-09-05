
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HistoricalQuotesComponent } from './components/historical-quotes/historical-quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EarningsChartComponent } from './components/earnings-chart/earnings-chart.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},

  // { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'historical-data', component: HistoricalQuotesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'earnings', component: EarningsChartComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }