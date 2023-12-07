import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-coefficients',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './coefficients.component.html',
  styleUrl: './coefficients.component.scss'
})
export class CoefficientsComponent {

    @Input()
    public dividend!: number;

    @Input()
    public earnings!: number;

    @Input()
    public treasury!: number;

    @Input()
    public intercept!: number;
}
