import {FieldGrid} from "../field-grid";
import {FieldState} from "../field/field-state.enum";
import {AIListener} from "./ai-listener";

export class AI {
  private grid: FieldGrid;
  private listeners: Array<AIListener> = [];
  //private rules: Array<Rule> = [];

  constructor(grid: FieldGrid) {
    this.grid = grid;

    // Build rules

  }

  /**
   * Run a single step in the AI
   * Returns true if it did run
   * @returns {boolean}
   */
  run(): boolean {
    let fieldList = this.grid.getFieldList();
    let didStep = false;

    /*
    let bestRule : Rule = this.rules[0];
    let bestScore = 0;
    this.rules.forEach((rule) => {
      let score = rule.getScore(fieldList);

      if (score > bestScore) {
        bestScore = score;
        bestRule = rule;
      }
    });

    bestRule.run(); // */

    for (let i = 0; i < fieldList.length; i++) {
      if (didStep) break;
      let field = fieldList[i];

      if (field.state == FieldState.Exposed && field.bombNumber > 0) {
        // Check if we can mark any neighbors
        let indicesOfField = this.grid.getIndicesOfField(field);
        let neighbors = this.grid.getNeighbors(indicesOfField.first, indicesOfField.second);
        let unMarkedNearby = 0;
        let markedNearby = 0;
        neighbors.forEach((neighbor) => {
          switch (neighbor.state) {
            case FieldState.Unmarked:
              unMarkedNearby++;
              break;
            case FieldState.Marked:
              markedNearby++;
              break;
          }
        });

        if (markedNearby == field.bombNumber && unMarkedNearby > 0) {

          // Click the unmarked
          neighbors.forEach((neighbor) => {
            neighbor.expose();
            this.notifyListeners((listener: AIListener) => {
              listener.fieldExposed(neighbor);
            });

          });
          didStep = true;
        }
        else if ((unMarkedNearby + markedNearby) == field.bombNumber && unMarkedNearby > 0) {
          // Mark all fields
          neighbors.forEach((neighbor) => {
            if (field != neighbor && neighbor.state != FieldState.Exposed) {
              neighbor.state = FieldState.Marked;
              this.notifyListeners((listener: AIListener) => {
                listener.fieldsMarked(neighbor);
              });
            }
          });
          didStep = true;
        }
      }
    }

    return didStep;
  }

  addListener(listener: AIListener) {
    this.listeners.push(listener);
  }

  notifyListeners(method: (AIListener) => void) {
    this.listeners.forEach((listener) => {
      method(listener);
    });
  }

  getFieldGrid(): FieldGrid {
    return this.grid;
  }

  setGrid(grid: FieldGrid) {
    this.grid = grid;
  }
}
