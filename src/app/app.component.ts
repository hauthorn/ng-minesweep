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
  defaultWidth: number = 14;
  defaultHeight: number = 8;

  constructor() {
    this.generateGrid();
    this.ai = new AI(this.grid);
  }

  generateGrid(width?: number, height?: number) {
    if (!width) {
      width = this.defaultWidth;
    }
    if (!height) {
      height = this.defaultHeight;
    }
    let rate = (this.distribution / 100);
    this.grid = FieldGrid.generateRandomGrid(width, height, rate);
    setTimeout(() => this.grid.markFieldsWithNumberOfBombs(), 1000);
    if (this.ai) this.ai.setGrid(this.grid);
  }

  distributionChanged(event: MdSliderChange) {
    this.distribution = event.value;
  }
}
