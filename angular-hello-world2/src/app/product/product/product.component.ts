import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Product } from '../../models/Product';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-product',
  imports: [NgFor, NgClass, SharedModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 products: Product[]

  constructor(productService: ProductService) {
    productService.addProducts(new Product('plum', 10));
    this.products = productService.getProducts();
  }

  getActiveClassName(product:Product){
  return product.name.toLowerCase();
}
}
