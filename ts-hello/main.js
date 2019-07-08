"use strict";
exports.__esModule = true;
var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    MyPoint.prototype.draw = function () {
        console.log('x:' + this.x + ' y: ' + this.y);
    };
    return MyPoint;
}());
var point = new MyPoint(1, 2);
point.draw();
