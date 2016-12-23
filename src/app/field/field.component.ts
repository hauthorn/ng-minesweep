import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Field} from "../../domain/field/field";
import {FieldState} from "../../domain/field/field-state.enum";
import {MdSnackBar} from '@angular/material';
import {FieldContents} from "../../domain/field/field-contents.enum";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() field: Field;
  @Output() exposed: EventEmitter<Field> = new EventEmitter();

  constructor(public snackbar: MdSnackBar) {
  }

  getIconString(): string {
    if (this.field.hiddenContents == FieldContents.BOMB) return "warning";
    switch (this.field.state) {
      case FieldState.Unmarked:
        return "";
      case FieldState.Marked:
        return "warning";
      case FieldState.Unsure:
        return "help";
      case FieldState.Exposed:
        return "done";
    }
  }

  exposeField(event) {
    event.preventDefault();
    if (this.field.hiddenContents == FieldContents.BOMB) {
      this.snackbar.open("BOMB!");
    }
    else {
      this.field.state = FieldState.Exposed;
      this.exposed.emit(this.field);
    }
  }

  changeFieldState(event) {
    event.preventDefault();
    switch (this.field.state) {
      case FieldState.Unmarked:
        this.field.state = FieldState.Marked;
        break;
      case FieldState.Marked:
        this.field.state = FieldState.Unsure;
        break;
      case FieldState.Unsure:
        this.field.state = FieldState.Unmarked;
        break;
    }
  }

  hasBeenExposed() {
    return this.field.state == FieldState.Exposed;
  }
}
