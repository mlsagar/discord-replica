import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClerkService, ClerkSignInComponent } from 'ngx-clerk';

@Component({
  selector: 'app-login',
  imports: [ClerkSignInComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private _clerk: ClerkService,
    private _router: Router
  ) {
  }
}
