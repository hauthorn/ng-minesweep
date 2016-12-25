import {Field} from "./field";

export interface FieldListener {
  fieldExposed(field: Field): void;
}
