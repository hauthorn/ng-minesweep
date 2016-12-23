import {Component, Input} from '@angular/core';
import {FieldGrid} from "../../domain/field-grid";

@Component({
  selector: 'app-field-grid',
  templateUrl: './field-grid.component.html',
  styleUrls: ['./field-grid.component.css']
})
export class FieldGridComponent {
  @Input() fieldGrid: FieldGrid;
}
