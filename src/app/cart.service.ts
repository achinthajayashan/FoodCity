import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() {}

  addToCart(item: any): void {
    this.cartItems.push(item);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

}
