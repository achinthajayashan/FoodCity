import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  items = [
    { id: 1, name: 'Fresh Pear' , weight:1 ,price:120.00 , image:'Pear_4.png' },
    { id: 2, name: 'Sweet Watermelon' , weight:1 ,price:120.00 ,image:'Watermelon_4.png'  },
    { id: 3, name: 'Pumpkin' , weight:1 ,price:120.00 ,image:'Pumpkin_3.png'},
    { id: 4, name: 'Strawberry' , weight:1 ,price:120.00 ,image:'Strawberry_1.png' },
    { id: 5, name: 'Fresh Pear' , weight:1 ,price:120.00 , image:'Pear_4.png' },
    { id: 6, name: 'Sweet Watermelon' , weight:1 ,price:120.00 ,image:'Watermelon_4.png' },
    { id: 7, name: 'Pumpkin' , weight:1 ,price:120.00 ,image:'Pumpkin_3.png'  },
    { id: 8, name: 'Strawberry' , weight:1 ,price:120.00 ,image:'Strawberry_1.png' },
    { id: 9, name: 'Fish' , weight:1 ,price:120.00 , image:'Sea_food_1.png' },
    { id: 10, name: 'Cuttle fish' , weight:1 ,price:120.00 ,image:'Sea_food_3.png'},
    { id: 11, name: 'Meat' , weight:1 ,price:120.00 ,image:'Sea_food_2.png' },
    { id: 12, name: 'Meat' , weight:1 ,price:120.00 ,image:'Sea_food_4.png' },
  ];

  constructor(
    private cartService: CartService
  ) {}

  addToCart(product: any): void {
    const existingItemIndex = this.cartService.cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      this.cartService.cartItems[existingItemIndex].weight++;
      this.cartService.getCartItems();
    } else {
      this.cartService.addToCart(product);
    }
    // this.cartService.addToCart(product);
    // alert("Item added successfully")

  }


}
