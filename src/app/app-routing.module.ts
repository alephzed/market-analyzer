
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalQuotesComponent } from './components/historical-quotes/historical-quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/GSPC', pathMatch: 'full'},
  { path: 'historical-data/:id', component: HistoricalQuotesComponent },
  { path: 'dashboard/:id', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }