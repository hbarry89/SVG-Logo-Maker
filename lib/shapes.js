// A parent Shape class to use inheritance to reuse the code in the child classes.
class Shape {
    constructor() {
    }
}

// Child classes for each shape: Triangle, Circle, and Square

class Square {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
     // render() method that returns a string for the corresponding SVG file with the given shape color.
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = { Square, Triangle, Circle }