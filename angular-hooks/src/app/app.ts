import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-hooks';
  counter: number = 0;
  
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
