import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css',
})
export class ProductAlertsComponent {
  @Input() product: any;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}