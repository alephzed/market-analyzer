import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ValuationService } from 'src/app/services/valuation.service';

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './earnings.component.html',
  styleUrl: './earnings.component.scss'
})
export class EarningsComponent implements OnInit {

  @Input()
  public title!: string;
  @Input()
  public earnings!: number;
  @Input()
  public price!: number;
  @Input()
  public valuation!: string;
  currentPrice: any;

  constructor(private valuationService: ValuationService) {}

  ngOnInit(): void {
    this.valuationService.selectedQuote$.subscribe((value) => {
      this.currentPrice = value;
      console.log(value)
    })
  }

  getValuationColor() {
    return this.valuation === 'OVERVALUED'? 'red':'green';
  }

  getValuationPercent() {
    return Math.abs((this.currentPrice - this.price) / this.price * 100).toFixed(2);
  }

}
