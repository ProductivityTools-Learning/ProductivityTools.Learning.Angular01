import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  user: { name: string } ;

  constructor() {
    this.user = { name: 'pawel' }
  }

  changeName() {
    this.user.name = 'gosia';
  }
}
