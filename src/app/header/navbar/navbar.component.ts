import {Component, OnInit, Signal, signal} from '@angular/core';
import {TopNavbarComponent} from "../top-navbar/top-navbar.component";
import {RouterLink} from "@angular/router";
import {CartService} from "../../cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  cartQuantityCount?= signal(this.cartService.cartCount2());

  // countOFCart:number = signal(this.cartService.changeCartCount());


  constructor(private cartService: CartService) {
    console.log(this.cartService.cartCount2());
  }

  // ngOnInit() {
  //   this.cartQuantityCount = this.cartService.cartItemCount;
  // }


}
