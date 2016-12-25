import {Rule} from "./rule";
import {Field} from "../../field/field";
import {BaseRule} from "./BaseRule";
import {FieldState} from "../../field/field-state.enum";

export class MarkFieldsRule extends BaseRule implements Rule {
  private bestField : Field;

  run(fieldList: Field[]): void {

  }

  getScore(fieldList: Field[]): number {
    let score = 0;

    for (let i = 0; i < fieldList.length; i++) {
      let field = fieldList[i];
      let calculations = this.calculateNeighbors(field);

      if (calculations.marked== field.bombNumber && calculations.unmarked > 0) {
        // sum the unmarked
        let localScore = calculations.neighbors.filter((field) => {return field.state == FieldState.Unmarked}).length;

        if (localScore > score) {
          score = localScore;
          this.bestField = field;
        }
      }
    }

    return score;
  }

}
