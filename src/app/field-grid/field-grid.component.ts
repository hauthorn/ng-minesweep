import {Component, Input} from '@angular/core';
import {FieldGrid} from "../../domain/field-grid";
import {Field} from "../../domain/field/field";

@Component({
  selector: 'app-field-grid',
  templateUrl: './field-grid.component.html',
  styleUrls: ['./field-grid.component.css']
})
export class FieldGridComponent {
  @Input() fieldGrid: FieldGrid;

  fieldExposed(field : Field) {
    // Find the index of the field
    let pair = this.fieldGrid.getIndicesOfField(field);

    // Start checking neighbors
    this.fieldGrid.checkAndExposeNeighbors(pair.first, pair.second);
  }

}
