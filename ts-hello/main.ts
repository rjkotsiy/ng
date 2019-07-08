import { deflateRaw } from "zlib";

interface Point {
    x: number,
    y: number,

    draw(): void;
}

class MyPoint {

    constructor(private _x: number, private _y: number) {
    }

    draw() {
        console.log('x:' + this._x + ' y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0) 
            throw new Error("fck you");
        this._x = value;
    }

}


let point = new MyPoint(1, 2);

point.x = 5;
point.draw();