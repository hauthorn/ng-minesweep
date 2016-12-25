import {FieldState} from "./field-state.enum";
import {FieldContents} from "./field-contents.enum";
import {FieldListener} from "./field-listener";

export class Field {
  private _listener: FieldListener;
  state: FieldState;
  hiddenContents: FieldContents;
  bombNumber: number;

  constructor(state: FieldState, hiddenContents: FieldContents, listener?: FieldListener) {
    this.state = state;
    this.hiddenContents = hiddenContents;
    this.bombNumber = 0;
    this._listener = listener;
  }


  set listener(value: FieldListener) {
    this._listener = value;
  }

  /**
   * Expose this field
   */
  expose() {
    if (this._listener) {
      this._listener.fieldExposed(this);
    }
  }
}
