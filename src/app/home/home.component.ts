import { Component } from '@angular/core';
import { ClerkUserButtonComponent, ClerkUserProfileComponent } from 'ngx-clerk';

@Component({
  selector: 'app-home',
  imports: [ClerkUserButtonComponent, ClerkUserProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
