import { FieldState } from "../field/field-state.enum";
export var AI = (function () {
    //private rules: Array<Rule> = [];
    function AI(grid) {
        this.listeners = [];
        this.grid = grid;
        // Build rules
    }
    /**
     * Run a single step in the AI
     * Returns true if it did run
     * @returns {boolean}
     */
    AI.prototype.run = function () {
        var _this = this;
        var fieldList = this.grid.getFieldList();
        var didStep = false;
        /*
        let bestRule : Rule = this.rules[0];
        let bestScore = 0;
        this.rules.forEach((rule) => {
          let score = rule.getScore(fieldList);
    
          if (score > bestScore) {
            bestScore = score;
            bestRule = rule;
          }
        });
    
        bestRule.run(); // */
        var _loop_1 = function(i) {
            if (didStep)
                return "break";
            var field = fieldList[i];
            if (field.state == FieldState.Exposed && field.bombNumber > 0) {
                // Check if we can mark any neighbors
                var indicesOfField = this_1.grid.getIndicesOfField(field);
                var neighbors = this_1.grid.getNeighbors(indicesOfField.first, indicesOfField.second);
                var unMarkedNearby_1 = 0;
                var markedNearby_1 = 0;
                neighbors.forEach(function (neighbor) {
                    switch (neighbor.state) {
                        case FieldState.Unmarked:
                            unMarkedNearby_1++;
                            break;
                        case FieldState.Marked:
                            markedNearby_1++;
                            break;
                    }
                });
                if (markedNearby_1 == field.bombNumber && unMarkedNearby_1 > 0) {
                    // Click the unmarked
                    neighbors.forEach(function (neighbor) {
                        neighbor.expose();
                        _this.notifyListeners(function (listener) {
                            listener.fieldExposed(neighbor);
                        });
                    });
                    didStep = true;
                }
                else if ((unMarkedNearby_1 + markedNearby_1) == field.bombNumber && unMarkedNearby_1 > 0) {
                    // Mark all fields
                    neighbors.forEach(function (neighbor) {
                        if (field != neighbor && neighbor.state != FieldState.Exposed) {
                            neighbor.state = FieldState.Marked;
                            _this.notifyListeners(function (listener) {
                                listener.fieldsMarked(neighbor);
                            });
                        }
                    });
                    didStep = true;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < fieldList.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break") break;
        }
        return didStep;
    };
    AI.prototype.addListener = function (listener) {
        this.listeners.push(listener);
    };
    AI.prototype.notifyListeners = function (method) {
        this.listeners.forEach(function (listener) {
            method(listener);
        });
    };
    AI.prototype.getFieldGrid = function () {
        return this.grid;
    };
    AI.prototype.setGrid = function (grid) {
        this.grid = grid;
    };
    return AI;
}());
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/domain/ai/ai.js.map