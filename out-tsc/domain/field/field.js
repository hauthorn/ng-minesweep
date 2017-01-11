export var Field = (function () {
    function Field(state, hiddenContents, listener) {
        this.state = state;
        this.hiddenContents = hiddenContents;
        this.bombNumber = 0;
        this._listener = listener;
    }
    Object.defineProperty(Field.prototype, "listener", {
        set: function (value) {
            this._listener = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Expose this field
     */
    Field.prototype.expose = function () {
        if (this._listener) {
            this._listener.fieldExposed(this);
        }
    };
    return Field;
}());
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/domain/field/field.js.map