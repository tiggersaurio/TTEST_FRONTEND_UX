import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  } // function to show and hide the mobile navbar
}
