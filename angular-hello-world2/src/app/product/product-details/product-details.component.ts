import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productName?: string | null;
  product?: Product;
  routeSub$: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.routeSub$ = this.activatedRoute.paramMap.subscribe(paramMap => {
      this.productName = paramMap.get('name');
      console.log(this.productName)
      if (this.productName !== undefined && this.productName !== null) {
        this.product = this.productService.getProduct(this.productName);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
  }
}

