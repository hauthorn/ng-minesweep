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
    this.generateGrid();
  }

  generateGrid() {
    this.grid = FieldGrid.generateRandomGrid(20, 10, 0.2);
    setTimeout(() => this.grid.markFieldsWithNumberOfBombs(), 1000);
  }
}
