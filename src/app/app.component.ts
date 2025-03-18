import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDirective } from './shared/ui/button.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'discord-replica';
}
