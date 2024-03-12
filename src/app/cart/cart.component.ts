import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];


  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  subTotal = 2500.00;

  increaseQty(id:number): void {
    this.cartService.incremenetQty(id);
  }

  decreaseQty(id:number): void {
    this.cartService.decreaseQty(id);
  }


}
