import {FieldState} from "../../field/field-state.enum";
import {FieldGrid} from "../../field-grid";

export abstract class BaseRule {
  private grid: FieldGrid;


  calculateNeighbors(field) {
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

    return {
      neighbors: neighbors,
      unmarked: unMarkedNearby,
      marked: markedNearby
    }
  }
}
