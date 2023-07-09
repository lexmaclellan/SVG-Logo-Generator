class Circle {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
    setColor(color) {
        this.color = color;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="75" y="30" width="150" height="150" fill="${this.color}" />`;
    }
    setColor(color) {
        this.color = color;
    }
}

module.exports = { Circle, Triangle, Square };