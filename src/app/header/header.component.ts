import { Component } from '@angular/core';
import {TopNavbarComponent} from "./top-navbar/top-navbar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuBarComponent} from "./menu-bar/menu-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TopNavbarComponent,
    NavbarComponent,
    MenuBarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
