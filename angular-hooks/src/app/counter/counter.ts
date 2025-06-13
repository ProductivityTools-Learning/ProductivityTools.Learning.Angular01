import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter implements OnChanges, DoCheck {
  ngDoCheck(): void {
    this.log = this.log + 'internal counter changed||';
  }

  @Input() counter: number = 0;
  log: string = ''

  ngOnChanges(changes: SimpleChanges): void {
    this.log = this.log + 'counter changed' + changes["counter"].currentValue + "previous value:" + changes["counter"].previousValue +"||";
  }



  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
