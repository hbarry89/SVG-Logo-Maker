// A parent Shape class to use inheritance to reuse the code in the child classes.
class Shape {
    constructor () {
    }
}

// Child classes for each shape: Triangle, Circle, and Square

class Square {
    constructor () {
    }
    // render() method that returns a string for the corresponding SVG file with the given shape color.
    render() {
        return "";
    }
}

class Triangle {
    constructor () {
    }
    render() {
        return "";
    }
}

class Circle {
    constructor () {
    }
    render() {
        return "";
    }
}

module.exports = { Square, Triangle, Circle }