
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalQuotesComponent } from './components/historical-quotes/historical-quotes.component';

const routes: Routes = [
  { path: 'historical-data/:id', component: HistoricalQuotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }