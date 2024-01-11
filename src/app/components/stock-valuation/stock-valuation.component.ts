import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ValuationService } from 'src/app/services/valuation.service';

@Component({
  selector: 'app-stock-valuation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './stock-valuation.component.html',
  styleUrl: './stock-valuation.component.scss'
})
export class StockValuationComponent implements OnInit, OnChanges {

  @Input()
  public dividend!: number;

  @Input()
  public currentPrice!: number;

  @Input()
  public peRatio!: number;

  @Input()
  public dividendYield!: number;

  @Input()
  treasuryYield!: number;

  @Input()
  time!: string;

  constructor(private valuationService: ValuationService) {}
  ngOnInit(): void {
    this.valuationService.setQuote(this.currentPrice);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.valuationService.setQuote(this.currentPrice);
  }
  

}
