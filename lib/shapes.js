function Shape(color) {
    this.color = color;
}
Shape.prototype.setColor = function(color) {
    this.color = color;
}

function Circle(color) {
    Shape.call(this, color);
}
Circle.prototype.render = function() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color} />`;
}

function Triangle(color) {
    Shape.call(this, color);
}
Triangle.prototype.render = function() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color} />`;
}

function Square(color) {
    Shape.call(this, color);
}
Square.prototype.render = function() {
    return `<rect width="150" height="150" fill="${this.color}" />`;
}