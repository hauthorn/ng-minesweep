import {Component} from '@angular/core';
import {FieldGrid} from "./logic/field-grid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fieldgrid: FieldGrid;


  constructor() {
    this.fieldgrid = FieldGrid.generateRandomGrid(10, 10);
  }
}
