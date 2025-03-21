import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-mode-toggle',
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './mode-toggle.component.html',
  styleUrl: './mode-toggle.component.css'
})
export class ModeToggleComponent {

  darkMode = signal<boolean>(
    JSON.parse(localStorage.getItem("darkMode") ?? "false")
  );
  
  appRoot  = document.querySelector("app-root");

  constructor() {
    effect(() => {
      if (this.darkMode()){
        this.appRoot?.classList.add("dark");
      } else {
        this.appRoot?.classList.remove("dark");
      }
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }
}
