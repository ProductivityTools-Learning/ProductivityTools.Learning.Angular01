import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomePageComponent,
    ProductManagerComponent
  ],
  exports: [HomePageComponent,ProductManagerComponent]
})
export class ProductModule { }
