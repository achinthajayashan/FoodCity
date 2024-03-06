import { Component } from '@angular/core';
import {TopNavbarComponent} from "../top-navbar/top-navbar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TopNavbarComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
