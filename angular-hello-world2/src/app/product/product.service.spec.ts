import { TestBed } from '@angular/core/testing';
import { Product } from './models/Product';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be list of products', () => {
    expect(service.getProducts()).toEqual([
        new Product('Apple', 10),
        new Product('Orrange', 20),
        new Product('Bannana', 30)
      ]);
  });
});
