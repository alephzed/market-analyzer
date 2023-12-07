import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-stock-valuation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './stock-valuation.component.html',
  styleUrl: './stock-valuation.component.scss'
})
export class StockValuationComponent {

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

  

}
