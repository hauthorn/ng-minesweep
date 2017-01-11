var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FieldGrid } from "../domain/field-grid";
import { AI } from "../domain/ai/ai";
export var AppComponent = (function () {
    function AppComponent() {
        this.distribution = 20;
        this.generateGrid();
        this.ai = new AI(this.grid);
    }
    AppComponent.prototype.generateGrid = function () {
        var _this = this;
        var rate = (this.distribution / 100);
        this.grid = FieldGrid.generateRandomGrid(16, 10, rate);
        setTimeout(function () { return _this.grid.markFieldsWithNumberOfBombs(); }, 1000);
        if (this.ai)
            this.ai.setGrid(this.grid);
    };
    AppComponent.prototype.distributionChanged = function (event) {
        this.distribution = event.value;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/app/app.component.js.map