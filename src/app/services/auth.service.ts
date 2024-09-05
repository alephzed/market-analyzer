import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private loginUrl: string = `${environment.apiUrl}/login`;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.loginUrl, { username, password });
  }
}