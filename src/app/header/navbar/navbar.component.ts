import {Component, OnInit, Signal, signal} from '@angular/core';
import {TopNavbarComponent} from "../top-navbar/top-navbar.component";
import {RouterLink} from "@angular/router";
import {CartService} from "../../cart.service";
import {Subscription} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  countNum: number = this.cartService.cartCount2()

  cartQuantityCount?= signal(this.cartService.cartCount2());



  constructor(protected cartService: CartService) {
    console.log(this.cartService.cartCount2());
  }

  // ngOnInit() {
  //   this.cartQuantityCount = this.cartService.cartItemCount;
  // }



}
