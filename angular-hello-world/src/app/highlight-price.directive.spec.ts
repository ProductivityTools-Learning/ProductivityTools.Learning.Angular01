import { ElementRef } from '@angular/core';
import { HighlightPriceDirective } from './highlight-price.directive';

describe('HighlightPriceDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightPriceDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
