import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductManagerComponent } from "./product-manager/product-manager.component";

@Component({
  selector: 'app-root',
  imports: [HomePageComponent, ProductManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pawel learning';
  storeName="Pawel sklep"

  getStoreName=()=>{
    return this.storeName
  }

}
