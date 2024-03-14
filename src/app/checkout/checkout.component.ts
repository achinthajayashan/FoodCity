import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkoutForm = this.fb.group({
    fullName: ['', Validators.required,],
    address: ['', Validators.required],
    city: ['', Validators.required],
    district: ['', Validators.required],
    email: ['', [Validators.required , Validators.email]],
    contact: [1, Validators.required],
  });

  isSubmitted = false;

  constructor(private fb: FormBuilder , protected cartService: CartService) {}

  // ngOnInit(): void {
  //   this.registerForm.get('roleId')?.valueChanges.subscribe((roleId) => {
  //     console.log('SEND API REQUEST AND UPDATE ROLE', roleId);
  //   });
  // }

  onSubmit(): void {
    console.log(
      'submitted form',
      this.checkoutForm.value,
      this.checkoutForm.invalid
    );

      alert("Order placed successfully");


    this.isSubmitted = true;
  }

}
