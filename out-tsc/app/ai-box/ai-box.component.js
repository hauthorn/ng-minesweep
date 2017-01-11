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
import { AI } from "../../domain/ai/ai";
export var AiBoxComponent = (function () {
    function AiBoxComponent() {
        this.messages = [];
    }
    AiBoxComponent.prototype.ngOnInit = function () {
        this.messages.push("AI i ready to think...");
        this.ai.addListener(this);
    };
    AiBoxComponent.prototype.runStep = function () {
        var _this = this;
        this.messages.push("Running AI");
        this.ai.run();
        this.timer = setInterval(function () {
            if (!_this.ai.run()) {
                _this.messages.push("Stopping, no valid moves");
                clearInterval(_this.timer);
            }
        }, 1000);
    };
    AiBoxComponent.prototype.fieldsMarked = function (field) {
        var coordinates = this.ai.getFieldGrid().getIndicesOfField(field);
        this.messages.push("Marking fields: " + coordinates.first + ", " + coordinates.second);
    };
    AiBoxComponent.prototype.fieldExposed = function (field) {
        var coordinates = this.ai.getFieldGrid().getIndicesOfField(field);
        this.messages.push("Exposing fields: " + coordinates.first + ", " + coordinates.second);
    };
    __decorate([
        Input(), 
        __metadata('design:type', AI)
    ], AiBoxComponent.prototype, "ai", void 0);
    AiBoxComponent = __decorate([
        Component({
            selector: 'app-ai-box',
            templateUrl: './ai-box.component.html',
            styleUrls: ['./ai-box.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AiBoxComponent);
    return AiBoxComponent;
}());
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/app/ai-box/ai-box.component.js.map