"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyPoint = /** @class */ (function () {
    function MyPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    MyPoint.prototype.draw = function () {
        console.log('x:' + this._x + ' y: ' + this._y);
    };
    Object.defineProperty(MyPoint.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("fck you");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return MyPoint;
}());
var point = new MyPoint(1, 2);
point.x = 5;
point.draw();
