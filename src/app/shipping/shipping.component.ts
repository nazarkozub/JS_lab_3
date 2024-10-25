import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent implements OnInit {
  shippingCosts: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}