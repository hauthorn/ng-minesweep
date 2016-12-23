import {Component} from '@angular/core';
import {FieldGrid} from "../domain/field-grid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grid: FieldGrid;

  constructor() {
    this.grid = FieldGrid.generateRandomGrid(10, 5);
  }
}
