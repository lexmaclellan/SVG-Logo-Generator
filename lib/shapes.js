function Shape(width, height, color, text) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.text = text;
}

function Circle(width, height, color, text) {
    Shape.call(this, width, height, color, text);
}

function Triangle(width, height, color, text) {
    Shape.call(this, width, height, color, text);
}

function Square(width, height, color, text) {
    Shape.call(this, width, height, color, text);
}