// import each class svg.js and shapes.js
const SVG = require("./svg");
const { Square } = require("./shapes");

// compares the rendered SVG string with the expected SVG string.
const expectedSvg =
  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  test("should render a 300 x 200 svg element", () => {
  expect(new SVG().render()).toEqual(expectedSvg);
});

// ensures that the rendered SVG contains the expected text element
test("should append text element", () => {
  const svg = new SVG();
  svg.setText("A", "white");
  const expectedText = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text>';
  expect(svg.render()).toContain(expectedText);
});

// ensures that the rendered SVG contains the expected text element with the specified message and color
test("should set text message and color", () => {
  const svg = new SVG();
  svg.setText("SVG", "#333");
  const expectedText = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text>';
  expect(svg.render()).toContain(expectedText);
});

// ensures that calling setText with a message longer than 3 characters throws an error with the specified message
test("should throw if text exceeds 3 characters", () => {
  const svg = new SVG();
  expect(() => svg.setText("HELLO", "#333")).toThrowError("Please input only up to three characters:");
});

// ensures that the rendered SVG contains the expected shape element
test("should include a shape", () => {
  const svg = new SVG();
  svg.setText("SVG", "#333");
  const square = new Square();
  square.setColor("red");
  svg.setShape(square);
  const expectedShape = '<rect x="90" y="40" width="120" height="120" fill="red" />';
  expect(svg.render()).toContain(expectedShape);
});