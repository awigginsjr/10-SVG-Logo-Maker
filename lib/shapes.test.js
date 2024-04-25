// import each class from shapes.js
const { Circle, Square, Triangle } = require("./shapes");

const testShapeRendering = (ShapeClass, expectedSvg, fillColor) => {
  test(`should render svg for a ${fillColor} ${ShapeClass.name.toLowerCase()} element`, () => {
    const shape = new ShapeClass();
    shape.setColor(fillColor);
    const actualSvg = shape.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
};

describe("Circle", () => {
  testShapeRendering(Circle, '<circle cx="150" cy="100" r="80" fill="blue" />', "blue");
  testShapeRendering(Circle, '<circle cx="150" cy="100" r="80" fill="red" />', "red");
});

describe("Triangle", () => {
  testShapeRendering(Triangle, '<polygon points="150, 18 244, 182 56, 182" fill="orange" />', "orange");
  testShapeRendering(Triangle, '<polygon points="150, 18 244, 182 56, 182" fill="black" />', "black");
});

describe("Square", () => {
  testShapeRendering(Square, '<rect x="90" y="40" width="120" height="120" fill="yellow" />', "yellow");
  testShapeRendering(Square, '<rect x="90" y="40" width="120" height="120" fill="blue" />', "blue");
});