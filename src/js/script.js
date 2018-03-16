/*
    Shape
        Rectangle
            Square
        Triangle
*/

function Shape(sideLengths) {
    this._name = '' || 'shape';
    this._sideLengths = sideLengths;
}

Shape.prototype.getPerimeter = function () {
    return this._sideLengths.reduce(function(prevVal, val) {
        return prevVal + val;
    });
}

Shape.prototype.getArea = function () {
    return this._sideLengths[0] * this._sideLengths[1];
}

Shape.prototype.toString = function() {
    return '[object ' + this._name + ']';
}

function Rectangle(sideLengths) {
    Shape.call(this, [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]]);

    this._name = 'Prostokąt';
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(sideLength) {
    Rectangle.call(this, [sideLength, sideLength]);
    this._name = 'Kwadrat';
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

function Triangle(sideLength) {
    Shape.call(this, [sideLength, sideLength, sideLength]);
    this._name = 'Trójkąt';
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getArea = function() {
    var a = this._sideLengths[0];

    return +((a * a * Math.sqrt(3)) / 4).toFixed(2);
}

var rec1 = new Rectangle([20,20]);
var sqr1 = new Square(20);
var tr1 = new Triangle(20);