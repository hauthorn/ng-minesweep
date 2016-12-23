import {Component, OnInit, Input} from '@angular/core';
import {Field} from "../../domain/field/field";
import {FieldState} from "../../domain/field/field-state.enum";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }

  getFieldStateString() : string {
    switch (this.field.state) {
      case FieldState.Unmarked:
        return "[ ]";
      case FieldState.Marked:
        return "[x]";
      case FieldState.Unsure:
        return "[?]";
    }
  }

}
