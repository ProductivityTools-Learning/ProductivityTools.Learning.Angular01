import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NgClass, NgFor } from '@angular/common';
import { Product } from '../models/Product';
import { HighlightPriceDirective } from '../highlight-price.directive';


@Component({
  selector: 'app-home-page',
  imports: [NgFor, NgClass, HighlightPriceDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  products: Product[]

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }
}
