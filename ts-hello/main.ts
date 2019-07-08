import { deflateRaw } from "zlib";

interface Point {
    x: number,
    y: number,

    draw(): void;
}

class MyPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x:' + this.x + ' y: ' + this.y);
    }
}


let point = new MyPoint(1, 2);

point.draw();