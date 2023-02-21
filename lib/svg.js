// Apply same structure for this file as shapes/shapes.test files (as demonstrated by instructor in class)
// Grab functions from corresponding test files as demonstrated by instructor in class
// setText() takes 2 arguments: "A", "white"
// setColor() takes 1 argument: "dodgerblue"
// setShape() takes 1 argument: square
class SVG {
    constructor () {
        this.text = "";
        this.textColor = "";
        this.shape = "";
    }

    setText(text, color) {
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg> />`;
    }

    // setColor(color) {
    //     this.color = color;
    // }
    // render() {
    //     return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    // }

    setShape(shape) {
        this.shape = shape;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shape} fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

module.exports = { SVG }