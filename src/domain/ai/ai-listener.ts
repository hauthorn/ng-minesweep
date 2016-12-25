
import {Field} from "../field/field";
export interface AIListener {

  /**
   * Called when a field is marked
   */
  fieldsMarked(markedField : Field): void;

  /**
   * Called when a field is exposed
   */
  fieldExposed(exposedField : Field): void;
}
