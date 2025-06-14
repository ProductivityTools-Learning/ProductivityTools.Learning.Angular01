import { Component, DoCheck, Input, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements DoCheck {

  @Input() user: { name: string } | undefined
  differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called");
    const changes = this.differ.diff(this.user);
    if (changes) {
      changes.forEachChangedItem((item: { key: any; previousValue: AnalyserNode; currentValue: any }) => {
        console.log("property", item.key, "changed from", item.previousValue, "to", item.currentValue);
      })

    }
  }

}
