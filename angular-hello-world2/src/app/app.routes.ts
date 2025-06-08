import { Routes } from '@angular/router';
import { HomePageComponent } from './product/home-page/home-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { DealsComponent } from './product/deals/deals.component';
import { ProductComponent } from './product/product/product.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'products', component: ProductComponent },
    { path: 'deals', component: DealsComponent },
    { path: 'details/:name', component: ProductDetailsComponent }
];
