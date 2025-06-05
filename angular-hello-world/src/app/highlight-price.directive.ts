import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightPrice]'
})
export class HighlightPriceDirective {

  @Input() appHighlightPrice = 0;


  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  ngOnInit(): void {
    if (this.appHighlightPrice && this.appHighlightPrice > 10) {
      this.element.nativeElement.style.backgroundColor = 'yellow';
    }
  }

}
