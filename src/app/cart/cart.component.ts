import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
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
    this.getTotal();
  }

  subTotal = 2500.00;

  increaseQty(id:number): void {
    this.cartService.incremenetQty(id);
    this.getTotal();
  }

  decreaseQty(id:number): void {
    this.cartService.decreaseQty(id);
    this.getTotal();
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.ngOnInit();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }




}
