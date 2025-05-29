import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightPrice]'
})
export class HighlightPriceDirective {

  @Input() appHighlightPrice = 0;


  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    if (this.appHighlightPrice && this.appHighlightPrice > 10) {
      this.element.nativeElement.style.backgroundColor = 'yellow';
    }
  }

}
