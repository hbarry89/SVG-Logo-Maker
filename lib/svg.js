// Apply same structure for this file as shapes/shapes.test files (as demonstrated by instructor in class)
// Grab functions from corresponding test files as demonstrated by instructor in class
// setText() takes 2 arguments: "A", "white"
// setColor() takes 1 argument: "dodgerblue"
// setShape() takes 1 argument: square
class SVG {
    constructor () {
        this.text = "";
        this.color = "";
        this.shape = "";
    }
    setText(text, color) {
        this.text = text;
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    setShape(shape) {
        this.shape = shape;
    }
}

module.exports = { SVG }