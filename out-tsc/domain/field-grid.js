import { Field } from "./field/field";
import { FieldState } from "./field/field-state.enum";
import { FieldContents } from "./field/field-contents.enum";
import { Pair } from "./pair";
export var FieldGrid = (function () {
    function FieldGrid(fields) {
        this.fields = fields;
    }
    /**
     * Create a grid of the specified size with random distribution of bombs
     * @param width
     * @param height
     * @param rate
     * @returns {FieldGrid}
     */
    FieldGrid.generateRandomGrid = function (width, height, rate) {
        var gridList = [];
        var distribution;
        if (rate) {
            distribution = rate;
        }
        else {
            distribution = 0.10;
        }
        for (var x = 0; x < width; x++) {
            gridList[x] = [];
            for (var y = 0; y < height; y++) {
                var contents = FieldContents.NOT_BOMB;
                if (Math.random() < distribution) {
                    contents = FieldContents.BOMB;
                }
                gridList[x][y] = new Field(FieldState.Unmarked, contents);
            }
        }
        return new FieldGrid(gridList);
    };
    FieldGrid.prototype.markFieldsWithNumberOfBombs = function () {
        for (var x = 0; x < this.fields.length; x++) {
            for (var y = 0; y < this.fields[0].length; y++) {
                var neighbors = this.getNeighbors(x, y);
                var bombNum = 0;
                for (var i = 0; i < neighbors.length; i++) {
                    if (neighbors[i].hiddenContents == FieldContents.BOMB) {
                        bombNum++;
                    }
                }
                this.fields[x][y].bombNumber = bombNum;
            }
        }
    };
    FieldGrid.prototype.getFieldList = function () {
        if (this.fieldsAsList != null)
            return this.fieldsAsList;
        var width = this.fields.length;
        var height = this.fields[0].length;
        var fieldsAsList = [];
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                fieldsAsList.push(this.fields[x][y]);
            }
        }
        this.fieldsAsList = fieldsAsList;
        return fieldsAsList;
    };
    /**
     * Get the indices of the field
     * @param field
     * @returns {Pair}
     */
    FieldGrid.prototype.getIndicesOfField = function (field) {
        for (var x = 0; x < this.fields.length; x++) {
            for (var y = 0; y < this.fields[0].length; y++) {
                if (field === this.fields[x][y]) {
                    return new Pair(x, y);
                }
            }
        }
    };
    /**
     * Recursively check and expose neighbors
     * @param fieldX
     * @param fieldY
     */
    FieldGrid.prototype.checkAndExposeNeighbors = function (fieldX, fieldY) {
        for (var x = fieldX - 1; x <= fieldX + 1; x++) {
            for (var y = fieldY - 1; y <= fieldY + 1; y++) {
                if (this.outsideGrid(x, y))
                    continue;
                if (this.fields[x][y].state != FieldState.Exposed) {
                    if (this.fields[x][y].hiddenContents != FieldContents.BOMB) {
                        this.fields[x][y].state = FieldState.Exposed;
                        if (this.fields[x][y].bombNumber == 0) {
                            this.checkAndExposeNeighbors(x, y);
                        }
                    }
                }
            }
        }
    };
    FieldGrid.prototype.getNeighbors = function (fieldX, fieldY) {
        var list = [];
        for (var x = fieldX - 1; x <= fieldX + 1; x++) {
            for (var y = fieldY - 1; y <= fieldY + 1; y++) {
                if (this.outsideGrid(x, y))
                    continue;
                list.push(this.fields[x][y]);
            }
        }
        return list;
    };
    /**
     * Are the coordinates inside the grid?
     * @param x
     * @param y
     * @returns {boolean}
     */
    FieldGrid.prototype.outsideGrid = function (x, y) {
        return x < 0 || x >= this.fields.length || y < 0 || y >= this.fields[0].length;
    };
    return FieldGrid;
}());
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/domain/field-grid.js.map