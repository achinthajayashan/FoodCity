import {Component, OnInit, signal} from '@angular/core';
import {TopNavbarComponent} from "../top-navbar/top-navbar.component";
import {RouterLink} from "@angular/router";
import {CartService} from "../../cart.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  cartCount = signal(0);
  constructor(private cartService: CartService) {
    this.cartCount.set(this.cartService.cartCount());
  }


}
