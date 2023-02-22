// Apply same structure for this file as shapes/shapes.test files (as demonstrated by instructor in class)
// Grab functions from corresponding test files as demonstrated by instructor in class
// setText() takes 2 arguments: "A", "white"
// setColor() takes 1 argument: "dodgerblue"
// setShape() takes 1 argument: square
class SVG {
    constructor () {
        this.text = "";
        this.shape = "";
    }

    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.")
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
        
    }

    setShape(shape) {
        this.shape = shape.render()
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
}

module.exports = SVG