import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './product/home-page/home-page.component';
import { ProductManagerComponent } from "./product/product-manager/product-manager.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
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
