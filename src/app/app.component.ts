import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClerkService, ClerkSignInComponent } from 'ngx-clerk';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'discord-replica';

  constructor(private _clerk: ClerkService) {
    this._clerk.__init({
      publishableKey: 'pk_test_YmlnLXdhc3AtMjUuY2xlcmsuYWNjb3VudHMuZGV2JA',
      signInUrl: '/login',
      signUpUrl: '/register'
    })
  }
}
