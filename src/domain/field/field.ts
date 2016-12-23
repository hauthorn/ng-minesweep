import {FieldState} from "./field-state.enum";
import {FieldContents} from "./field-contents.enum";

export class Field {
  state: FieldState;
  hiddenContents: FieldContents;

  constructor(state: FieldState, hiddenContents: FieldContents) {
    this.state = state;
    this.hiddenContents = hiddenContents;
  }
}
