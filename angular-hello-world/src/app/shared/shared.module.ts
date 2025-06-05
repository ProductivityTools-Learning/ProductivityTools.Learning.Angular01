import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { HighlightPriceDirective } from './highlight-price.directive';
import { PwUppercasePipe } from './pw-uppercase.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HighlightPriceDirective,PwUppercasePipe
  ],
  exports: [HighlightPriceDirective, PwUppercasePipe]
})
export class SharedModule { }
