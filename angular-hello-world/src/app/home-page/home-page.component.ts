import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Product } from '../models/Product';
import { HighlightPriceDirective } from '../highlight-price.directive';
import { PwUppercasePipe } from '../pw-uppercase.pipe';


@Component({
  selector: 'app-home-page',
  imports: [NgFor, NgClass, HighlightPriceDirective, CommonModule, PwUppercasePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  products: Product[]

  constructor(productService: ProductService) {
    productService.addProducts(new Product('plum', 10));
    this.products = productService.getProducts();
  }
}
