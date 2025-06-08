import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Product } from '../../models/Product';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
 
}
