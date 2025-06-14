import { AfterContentInit, Component, ContentChild, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-custom-panel-component',
  imports: [],
  templateUrl: './custom-panel-component.html',
  styleUrl: './custom-panel-component.css'
})
export class CustomPanelComponent implements AfterContentInit {

  @ContentChild('header') headerElement: ElementRef | undefined;

  ngAfterContentInit(): void {
    console.log("ngAftercontentInit invoked");
    if (this.headerElement) {
      console.log("header element found: ", this.headerElement.nativeElement.textContent);
    }
    else{
      console.log("header element not found");
    }
  }

}
