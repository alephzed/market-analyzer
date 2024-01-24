import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/reducers';
import { QuoteState } from './store/reducers/quote.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'market-analyzer';
  quoteItem$!: Observable<QuoteState>;
  val!: string;


  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.quoteItem$ = this.store.select((store) => store.quote);
    this.quoteItem$.subscribe((s) => {
      this.val = s.quote.name;
    });
    console.log(this.val);
  }
}
