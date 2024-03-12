import {Injectable, signal} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  cartCount = signal(0);

  constructor() {}

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.updateCartCount()
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  updateCartCount(){
    this.cartCount.set(this.cartItems.length);
    console.log(this.cartCount());
  }

  incremenetQty(id: number): void {
    let item = this.cartItems.find(item =>(item.id === id));
    if (item) {
      item.weight++;
      this.updateCartCount();
    }
  }

  decreaseQty(id: number): void {
    let item = this.cartItems.find(item =>(item.id === id));
    if (item) {
      item.weight--;
      this.updateCartCount();
    }
  }


}
