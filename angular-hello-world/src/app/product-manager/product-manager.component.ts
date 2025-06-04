import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-manager',
  imports: [],
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.css'
})
export class ProductManagerComponent {
  constructor(productService: ProductService){
    productService.addProducts(new Product('kiwi',20));
  }
}
