import { Component } from '@angular/core';
import { ClerkUserButtonComponent, ClerkUserProfileComponent } from 'ngx-clerk-iliad';

@Component({
  selector: 'app-home',
  imports: [ClerkUserButtonComponent, ClerkUserProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
