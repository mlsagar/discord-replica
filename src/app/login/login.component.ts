import { Component } from '@angular/core';
import { ClerkSignInComponent } from 'ngx-clerk';

@Component({
  selector: 'app-login',
  imports: [ClerkSignInComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
