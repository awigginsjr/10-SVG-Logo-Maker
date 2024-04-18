const SVG = require("./svg");
const { Square } = require("./shapes");

const expectedSvg =
  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';

test("should render a 300 x 200 svg element", () => {
  expect(new SVG().render()).toEqual(expectedSvg);
});

test("should append text element", () => {
  const svg = new SVG();
  svg.setText("A", "white");
  expect(svg.render()).toEqual(expectedSvg.replace("</svg>", '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>'));
});

test("should set text message and color", () => {
  const svg = new SVG();
  svg.setText("SVG", "#333");
  expect(svg.render()).toEqual(expectedSvg.replace("</svg>", '<text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>'));
});

test("should throw if text exceeds 3 characters", () => {
  const svg = new SVG();
  expect(() => svg.setText("HELLO", "#333")).toThrow(new Error("Text must not exceed 3 characters."));
});

test("should include a shape", () => {
  const svg = new SVG();
  svg.setText("SVG", "#333");
  const square = new Square();
  square.setColor("dodgerblue");
  svg.setShape(square);
  expect(svg.render()).toEqual(expectedSvg.replace("</svg>", '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" /></svg>').replace("</svg>", '<text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>'));
});
