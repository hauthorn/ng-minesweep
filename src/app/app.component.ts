import {Component} from '@angular/core';
import {FieldGrid} from "../domain/field-grid";
import {MdSliderChange} from "@angular/material";
import {AI} from "../domain/ai/ai";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grid: FieldGrid;
  ai: AI;
  distribution: number = 20;

  constructor() {
    this.generateGrid();
    this.ai = new AI(this.grid);
  }

  generateGrid() {
    let rate = (this.distribution / 100);
    this.grid = FieldGrid.generateRandomGrid(16, 10, rate);
    setTimeout(() => this.grid.markFieldsWithNumberOfBombs(), 1000);
    if (this.ai) this.ai.setGrid(this.grid);
  }

  distributionChanged(event : MdSliderChange) {
    this.distribution = event.value;
  }
}
