// shape class constructor
class Shape {
  constructor() {
    this.color = "";
  }
  
  setColor(color) {
    this.color = color;
  }
}

// class circle rending params of circle and fill user selection of color
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// class square rending params of square and fill user selection of color
class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

// class triangle rending params of triangle and fill user selection of color
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };