import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClerkService, ClerkSignInComponent } from 'ngx-clerk-iliad';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'discord-replica';
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor(private _clerk: ClerkService) {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    })

    this._clerk.__init({
      publishableKey: 'pk_test_YmlnLXdhc3AtMjUuY2xlcmsuYWNjb3VudHMuZGV2JA',
      signInUrl: '/login',
      signUpUrl: '/register'
    })
  }
}
