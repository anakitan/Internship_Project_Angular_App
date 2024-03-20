import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ContactMethod } from 'src/app/models/contactMethod.model';
import { PostalAddress } from 'src/app/models/postalAddress.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/userRole.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = {
    person: {
      postalAddresses: [{} as PostalAddress],
      contactMethods: [{} as ContactMethod]
    }
  };

  isAdmin: boolean = false;
  isUser: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  async onSubmit(event: Event) {
    event.preventDefault();

    if (this.isAdmin && this.isUser) {
      this.user.roles = [UserRole.ADMIN, UserRole.USER];
    } else if (this.isAdmin) {
      this.user.roles = [UserRole.ADMIN];
    } else if (this.isUser) {
      this.user.roles = [UserRole.USER];
    } else {
      this.user.roles = [];
    }

  this.authService.register(this.user).subscribe({
    next: (res) => {
      console.log(res);
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error(err);
      alert('An error occurred during registration. Please try again later.');
    }
  });
  }
}
