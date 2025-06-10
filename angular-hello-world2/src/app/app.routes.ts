import { Routes } from '@angular/router';
import { HomePageComponent } from './product/home-page/home-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { DealsComponent } from './product/deals/deals.component';
import { ProductComponent } from './product/product/product.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    {
        path: 'products', component: ProductComponent,
        children: [
            { path: 'details', component: ProductDetailsComponent }
        ]
    },
    { path: 'deals', component: DealsComponent },
    { path: 'details/:name', component: ProductDetailsComponent },
    { path: '**', component: NotFoundComponent }
];
