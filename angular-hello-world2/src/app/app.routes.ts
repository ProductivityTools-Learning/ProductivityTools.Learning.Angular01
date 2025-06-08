import { Routes } from '@angular/router';
import { HomePageComponent } from './product/home-page/home-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'details', component: ProductDetailsComponent }
];
