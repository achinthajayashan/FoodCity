import {computed, Injectable, signal} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];


  cartItemCount: number = 0;

  cartCount2= signal(0);

  constructor() {}

  addToCart(item: any): void {
    this.cartItems.push(item);
    console.log(this.cartItems.length);
    this.cartCount2.set(this.cartItems.length);
    console.log(this.cartCount2());
  }

  getCartItems(): any[] {
    return this.cartItems;
  }


  incremenetQty(id: number): void {
    let item = this.cartItems.find(item =>(item.id === id));
    if (item) {
      item.weight++;

    }
  }

  decreaseQty(id: number): void {
    let item = this.cartItems.find(item =>(item.id === id));
    if (item) {
      item.weight--;
    }
  }

  removeFromCart(i: any): void {
    this.cartItems = this.cartItems.filter(item => item.id!== i.id);
    this.getCartItems();
  }

  getTotal(){
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.price * item.weight;
    });
    return total;
  }




}
