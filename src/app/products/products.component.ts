import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

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
    { id: 1, name: 'Fresh Pear' , weight:'1KG' ,price:'Rs.120.00' , image:'Pear_4.png'},
    { id: 2, name: 'Sweet Watermelon' , weight:'1KG' ,price:'Rs.120.00' ,image:'Watermelon_4.png' },
    { id: 3, name: 'Pumpkin' , weight:'1KG' ,price:'Rs.120.00' ,image:'Pumpkin_3.png' },
    { id: 3, name: 'Strawberry' , weight:'1KG' ,price:'Rs.120.00' ,image:'Strawberry_1.png' },
    { id: 1, name: 'Fresh Pear' , weight:'1KG' ,price:'Rs.120.00' , image:'Pear_4.png'},
    { id: 2, name: 'Sweet Watermelon' , weight:'1KG' ,price:'Rs.120.00' ,image:'Watermelon_4.png' },
    { id: 3, name: 'Pumpkin' , weight:'1KG' ,price:'Rs.120.00' ,image:'Pumpkin_3.png' },
    { id: 3, name: 'Strawberry' , weight:'1KG' ,price:'Rs.120.00' ,image:'Strawberry_1.png' },
  ];
}
