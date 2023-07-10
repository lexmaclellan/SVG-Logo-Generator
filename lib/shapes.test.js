const { Circle, Triangle, Square } = require("../lib/shapes.js");

describe('Shapes', () => {

    describe('Circle.render', () => {
        it('should return the svg string to create a circle of the color given', () => {
            const shape = new Circle();
            shape.setColor('blue');
            
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
        })
    })

    describe('Triangle.render', () => {
        it('should return the svg string to create a triangle of the color given', () => {
            const shape = new Triangle();
            shape.setColor('blue');

            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        })
    })

    describe('Square.render', () => {
        it('should return the svg string to create a square of the color given', () => {
            const shape = new Square();
            shape.setColor('blue');

            expect(shape.render()).toEqual('<rect x="75" y="30" width="150" height="150" fill="blue" />')
        })
    })
})