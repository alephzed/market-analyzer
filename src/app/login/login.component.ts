import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.authService.setToken(response.token);
        this.router.navigate(['dashboard']);
      },
      error => {
        alert('Invalid credentials');
      }
    );
  }
}