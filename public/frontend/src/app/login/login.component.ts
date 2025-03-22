import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClerkService, ClerkSignInComponent } from 'ngx-clerk-iliad';

@Component({
  selector: 'app-login',
  imports: [ClerkSignInComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private _clerk: ClerkService,
    private _router: Router
  ) {
  }
}
