import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: User = { 
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const { username, password } = this.credentials;

    if (username && password) {
      this.authService.login({ username, password }).subscribe({
        next: (res) => {
          console.log(res);
          this.authService.setAuthToken(res.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err);
          alert('An error occurred during login. Please try again later.');
        }
      });
    } else {
      console.log('Username or password is empty');
    }
  }
}
