import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories=[
    {id:1, categoryName:'Meat and Seafood' , image :'meats.svg'},
    {id:1, categoryName:'Vegetables & Fruits' , image :'vegetable.svg'},
    {id:1, categoryName:'Milk & Dairy Products' , image :'milk.svg'},
    {id:1, categoryName:'Biscuits & Snacks' , image :'biscuit.svg'},
    {id:1, categoryName:'Grocery Items ' , image :'grocery.svg'},

  ]

  items = [
    { id: 1, name: 'Fresh Pear' , weight:'1KG' ,price:'Rs.120.00' , image:'Pear_4.png'},
    { id: 2, name: 'Sweet Watermelon' , weight:'1KG' ,price:'Rs.120.00' ,image:'Watermelon_4.png' },
    { id: 3, name: 'Pumpkin' , weight:'1KG' ,price:'Rs.120.00' ,image:'Pumpkin_3.png' },
    { id: 3, name: 'Strawberry' , weight:'1KG' ,price:'Rs.120.00' ,image:'Strawberry_1.png' },
  ];

  meats = [
    { id: 1, name: 'Fish' , weight:'1KG' ,price:'Rs.120.00' , image:'Sea_food_1.png'},
    { id: 2, name: 'Cuttle fish' , weight:'1KG' ,price:'Rs.120.00' ,image:'Sea_food_3.png' },
    { id: 3, name: 'Meat' , weight:'1KG' ,price:'Rs.120.00' ,image:'Sea_food_2.png' },
    { id: 3, name: 'Meat' , weight:'1KG' ,price:'Rs.120.00' ,image:'Sea_food_4.png' },
  ];

  constructor(
    private cartService: CartService
  ) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert("Item added successfully")
  }
}
