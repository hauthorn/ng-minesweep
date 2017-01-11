var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Field } from "../../domain/field/field";
import { FieldState } from "../../domain/field/field-state.enum";
import { MdSnackBar } from '@angular/material';
import { FieldContents } from "../../domain/field/field-contents.enum";
export var FieldComponent = (function () {
    function FieldComponent(snackbar) {
        this.snackbar = snackbar;
        this.exposed = new EventEmitter();
    }
    FieldComponent.prototype.ngOnInit = function () {
        this.field.listener = this;
    };
    FieldComponent.prototype.getIconString = function () {
        // For debugging
        //if (this.field.hiddenContents == FieldContents.BOMB) return "warning";
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
    };
    FieldComponent.prototype.exposeField = function (event) {
        if (this.field.state != FieldState.Unmarked) {
            return;
        }
        if (event)
            event.preventDefault();
        if (this.field.hiddenContents == FieldContents.BOMB) {
            this.snackbar.open("BOMB!", "OK", {
                duration: 2000,
            });
        }
        else {
            this.field.state = FieldState.Exposed;
            this.exposed.emit(this.field);
        }
    };
    FieldComponent.prototype.changeFieldState = function (event) {
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
    };
    FieldComponent.prototype.hasBeenExposed = function () {
        return this.field.state == FieldState.Exposed;
    };
    FieldComponent.prototype.fieldExposed = function (field) {
        // The field has been exposed, update anything is necessary
        this.exposeField(null);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Field)
    ], FieldComponent.prototype, "field", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], FieldComponent.prototype, "exposed", void 0);
    FieldComponent = __decorate([
        Component({
            selector: 'app-field',
            templateUrl: './field.component.html',
            styleUrls: ['./field.component.css']
        }), 
        __metadata('design:paramtypes', [MdSnackBar])
    ], FieldComponent);
    return FieldComponent;
}());
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/app/field/field.component.js.map