import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Log } from '../shared/decorators/log.decorator';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product('Apple', 10),
    new Product('Orrange', 20),
    new Product('Bannana', 30)
  ]

  @Log
  getProducts() {
    return this.products;
  }

  addProducts(product: Product) {
    this.products.push(product)
  }

  getProduct(name: string) {
    let r = this.products.find(product => product.name === name);
    return r;
  }

  constructor() { }
}
