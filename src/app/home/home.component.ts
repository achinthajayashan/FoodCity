import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

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
    { id: 1, name: 'Fresh Pear' , weight:'1KG' ,price:'120LKR'},
    { id: 2, name: 'Sweet Watermelon' , weight:'1KG' ,price:'120LKR' },
  ];
}
