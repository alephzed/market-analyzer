import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './earnings.component.html',
  styleUrl: './earnings.component.scss'
})
export class EarningsComponent {

  @Input()
  public title: string = "Title";
  @Input()
  public earnings: number = 123;
  @Input()
  public price: number = 10;
  @Input()
  public valuation: string = "Valuation";

}
