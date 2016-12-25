import {Field} from "../../field/field";
export interface Rule {
  run(fieldList: Field[]) : void;
  getScore(fieldList : Field[]) : number;
}
