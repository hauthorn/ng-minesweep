import {Component} from '@angular/core';
import {FieldGrid} from "../domain/field-grid";
import {MdSliderChange} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grid: FieldGrid;
  distribution: number = 20;

  constructor() {
    this.generateGrid();
  }

  generateGrid() {
    let rate = (this.distribution / 100);
    this.grid = FieldGrid.generateRandomGrid(16, 12, rate);
    setTimeout(() => this.grid.markFieldsWithNumberOfBombs(), 1000);
  }

  distributionChanged(event : MdSliderChange) {
    this.distribution = event.value;
  }
}
