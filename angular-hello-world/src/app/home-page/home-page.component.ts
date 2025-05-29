import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home-page',
  imports: [NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  products: Product[]

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }
}
