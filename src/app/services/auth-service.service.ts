import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  // `json-server`
  private apiUrl = 'http://localhost:3000/users'; 
  public isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}

  // Register user

  register(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  // Login user

  login(username: string, password: string) {
    return this.http.get<any[]>(this.apiUrl).subscribe(users => {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        this.isAuthenticated = true;
        this.router.navigate(['/']);
      } else {
        alert('Invalid credentials');
      }
    });
  }

  // Logout user
  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

}
