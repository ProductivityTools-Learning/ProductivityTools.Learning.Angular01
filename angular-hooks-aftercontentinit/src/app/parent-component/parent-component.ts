import { Component } from '@angular/core';
import { CustomPanelComponent } from '../custom-panel-component/custom-panel-component';

@Component({
  selector: 'app-parent-component',
  imports: [CustomPanelComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css'
})
export class ParentComponent {

}
