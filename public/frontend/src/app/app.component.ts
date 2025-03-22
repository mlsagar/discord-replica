import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClerkService } from 'ngx-clerk-iliad';
import { ModeToggleComponent } from './shared/mode-toggle/mode-toggle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ModeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'discord-replica';

  constructor(private _clerk: ClerkService) {
    this._clerk.__init({
      publishableKey: 'pk_test_YmlnLXdhc3AtMjUuY2xlcmsuYWNjb3VudHMuZGV2JA',
      signInUrl: '/login',
      signUpUrl: '/register',
      signInForceRedirectUrl: '/home'
    })
  }
}
