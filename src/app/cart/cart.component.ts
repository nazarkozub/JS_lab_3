import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  items: any;
  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    })
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: any) {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.log("Your order has been submitted", customerData);
  }
}