import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product('Apple', 10),
    new Product('Orrange', 20),
    new Product('Bannana', 30)
  ]

  getProducts = () => {
    return this.products;
  }

  addProducts = (product: Product) => {
    this.products.push(product)
  }
  constructor() { }
}
