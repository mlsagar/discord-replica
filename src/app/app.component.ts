import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDirective } from './shared/ui/button.directive';
import { ClerkService, ClerkSignInComponent } from 'ngx-clerk';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDirective, ClerkSignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'discord-replica';

  constructor(private _clerk: ClerkService) {
    this._clerk.__init({
      publishableKey: 'pk_test_YmlnLXdhc3AtMjUuY2xlcmsuYWNjb3VudHMuZGV2JA'
    })
  }
}
