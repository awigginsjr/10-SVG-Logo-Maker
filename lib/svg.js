// svg class constructor
class SVG {
    constructor() {
      this.elements = {
        text: "",
        shape: ""
      };
    }
  // render shape, elements, and text for svg
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.elements.shape}${this.elements.text}</svg>`;
    }
  // throw error if less or more than 3 characters
  // if not, generate text with color
    setText(message, color) {
      if (message.length > 3) throw new Error("Please input only up to three characters:");
      this.elements.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
  //render shape with elements
    setShape(shape) {
      this.elements.shape = shape.render();
    }
  }
  
  module.exports = SVG;