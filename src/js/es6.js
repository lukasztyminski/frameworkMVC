/*
    Shape
        Rectangle
            Square
        Triangle
*/

class Shape {
    constructor(...sideLengths) {
        this._name = '';
        this._sideLengths = sideLengths;
    }

    // methods
    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

    getPerimeter() {
        return this._sideLengths.reduce(function(prevVal, val) {
            return prevVal + val;
        });
    }

    getArea() {
        return this._sideLengths[0] * this._sideLengths[1];
    }
}

class Rectangle extends Shape {
    constructor(...sideLengths) {
        super(...sideLengths);
        this._name = 'Prostokąt';
    }

}

class Square extends Rectangle {
    constructor(...sideLengths) {
        super(...sideLengths);
        this._name = 'Kwadrat';
    }

}

class Triangle extends Shape {
    constructor(...sideLengths) {
        super(...sideLengths);
        this._name = 'Trójkąt';
    }

    getArea() {
        const a = this._sideLengths[0];

        return +((a * a * Math.sqrt(3)) / 4).toFixed(2);
    }

}

const rec1 = new Rectangle(20,40);
const sqr1 = new Square(20);
const tr1 = new Triangle(20);