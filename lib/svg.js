// Apply same structure for this file as shapes/shapes.test files (as demonstrated by instructor in class)
// Grab functions from corresponding test files as demonstrated by instructor in class

// SVG class with text and shape properties in the constructo function object

class SVG {
    constructor () {
        this.text = "";
        this.shape = "";
    }
    // setText function that sets text and color of the text, and checks text length

    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.")
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
        
    }
    // setShape function that sets shape
    
    setShape(shape) {
        this.shape = shape.render()
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
}

module.exports = SVG