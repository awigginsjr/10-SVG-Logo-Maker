// svg class constructor
class SVG {
    constructor() {
      this.elements = {
        text: "",
        shape: ""
      };
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.elements.shape}${this.elements.text}</svg>`;
    }
  
    setText(message, color) {
      if (message.length > 3) throw new Error("Please input only up to three characters:");
      this.elements.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
  
    setShape(shape) {
      this.elements.shape = shape.render();
    }
  }
  
  module.exports = SVG;