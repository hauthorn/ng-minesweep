import {Field} from "./field/field";
import {FieldState} from "./field/field-state.enum";
import {FieldContents} from "./field/field-contents.enum";
import {Pair} from "./pair";
export class FieldGrid {
  fields: Field[][];

  constructor(fields: Field[][]) {
    this.fields = fields;
  }

  getFieldList(): Field[] {
    let width = this.fields.length;
    let height = this.fields[0].length;
    let fieldsAsList = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        fieldsAsList.push(this.fields[x][y]);
      }
    }
    return fieldsAsList;
  }

  /**
   * Create a grid of the specified size with random distribution of bombs
   * @param width
   * @param height
   * @param rate
   * @returns {FieldGrid}
   */
  static generateRandomGrid(width: number, height: number, rate?: number): FieldGrid {
    let gridList = [];
    let distribution: number;
    if (rate) {
      distribution = rate;
    }
    else {
      distribution = 0.18
    }

    for (let x = 0; x < width; x++) {
      gridList[x] = [];
      for (let y = 0; y < height; y++) {
        let contents = FieldContents.NOT_BOMB;
        if (Math.random() < distribution) {
          contents = FieldContents.BOMB;
        }
        gridList[x][y] = new Field(FieldState.Unmarked, contents);
      }
    }
    return new FieldGrid(gridList);
  }

  /**
   * Get the indices of the field
   * @param field
   * @returns {Pair}
   */
  getIndicesOfField(field: Field): Pair<number, number> {
    for (let x = 0; x < this.fields.length; x++) {
      for (let y = 0; y < this.fields[0].length; y++) {
        if (field === this.fields[x][y]) {
          return new Pair(x, y);
        }
      }
    }
  }

  /**
   * Recursively check and expose neighbors
   * @param fieldX
   * @param fieldY
   */
  checkAndExposeNeighbors(fieldX: number, fieldY: number) {
    for (let x = fieldX - 1; x <= fieldX + 1; x++) {
      for (let y = fieldY - 1; y <= fieldY + 1; y++) {
        if (x < 0 || x >= this.fields.length || y < 0 || y >= this.fields[0].length) return;

        if (this.fields[x][y].hiddenContents != FieldContents.BOMB && this.fields[x][y].state != FieldState.Exposed) {
          this.fields[x][y].state = FieldState.Exposed;
          this.checkAndExposeNeighbors(x, y);
        }
      }
    }

  }
}
