var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FieldGrid } from "../../domain/field-grid";
export var FieldGridComponent = (function () {
    function FieldGridComponent() {
    }
    FieldGridComponent.prototype.fieldExposed = function (field) {
        // Find the index of the field
        var pair = this.fieldGrid.getIndicesOfField(field);
        // Start checking neighbors
        this.fieldGrid.checkAndExposeNeighbors(pair.first, pair.second);
    };
    __decorate([
        Input(), 
        __metadata('design:type', FieldGrid)
    ], FieldGridComponent.prototype, "fieldGrid", void 0);
    FieldGridComponent = __decorate([
        Component({
            selector: 'app-field-grid',
            templateUrl: './field-grid.component.html',
            styleUrls: ['./field-grid.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FieldGridComponent);
    return FieldGridComponent;
}());
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/app/field-grid/field-grid.component.js.map