import {Field} from "./field/field";
import {FieldState} from "./field/field-state.enum";
import {FieldContents} from "./field/field-contents.enum";
import {Pair} from "./pair";
export class FieldGrid {
  fields: Field[][];
  fieldsAsList: Field[];

  constructor(fields: Field[][]) {
    this.fields = fields;
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
      distribution = 0.10
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

  markFieldsWithNumberOfBombs() {
    for (let x = 0; x < this.fields.length; x++) {
      for (let y = 0; y < this.fields[0].length; y++) {
        let neighbors = this.getNeighbors(x, y);
        let bombNum = 0;
        for (let i = 0; i < neighbors.length; i++) {
          if (neighbors[i].hiddenContents == FieldContents.BOMB) {
            bombNum++;
          }
        }
        this.fields[x][y].bombNumber = bombNum;
      }
    }
  }

  getFieldList(): Field[] {
    if (this.fieldsAsList != null) return this.fieldsAsList;
    let width = this.fields.length;
    let height = this.fields[0].length;
    let fieldsAsList = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        fieldsAsList.push(this.fields[x][y]);
      }
    }
    this.fieldsAsList = fieldsAsList;
    return fieldsAsList;
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
        if (this.outsideGrid(x, y)) continue;

        if (this.fields[x][y].state != FieldState.Exposed) {
          if (this.fields[x][y].hiddenContents != FieldContents.BOMB) {
            this.fields[x][y].state = FieldState.Exposed;
            if (this.fields[x][y].bombNumber == 0) {
              this.checkAndExposeNeighbors(x, y);
            }
          }
        }
      }
    }
  }

  private getNeighbors(fieldX: number, fieldY: number): Field[] {
    let list = [];
    for (let x = fieldX - 1; x <= fieldX + 1; x++) {
      for (let y = fieldY - 1; y <= fieldY + 1; y++) {
        if (this.outsideGrid(x, y)) continue;
        list.push(this.fields[x][y]);
      }
    }
    return list;
  }

  /**
   * Are the coordinates inside the grid?
   * @param x
   * @param y
   * @returns {boolean}
   */
  private outsideGrid(x: number, y: number) {
    return x < 0 || x >= this.fields.length || y < 0 || y >= this.fields[0].length;
  }
}
