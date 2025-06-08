import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productName?: string;
  product?: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productName = this.activatedRoute.snapshot.params['name'];
    console.log(this.productName);
    if (this.productName !== undefined) {
      this.product = this.productService.getProduct(this.productName);
    }
  }
}

