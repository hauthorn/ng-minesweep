import {Field} from "./field/field";
import {FieldState} from "./field/field-state.enum";
import {FieldContents} from "./field/field-contents.enum";
export class FieldGrid {
  fields: Field[][];

  constructor(fields: Field[][]) {
    this.fields = fields;
  }

  getField(x: number, y: number): Field {
    return this.fields[x][y];
  }

  static generateRandomGrid(width: number, height: number) : FieldGrid {
    let gridList = [];

    for (let x = 0; x < width; x ++) {
      gridList[x] = [];
      for (let y = 0; y < height; y++) {
        let contents = FieldContents.NOT_BOMB;
        if (y == 3 && x == 3) {
          contents = FieldContents.BOMB;
        }
        gridList[x][y] = new Field(FieldState.Unmarked, contents);
      }
    }

    return new FieldGrid(gridList);
  }
}
