const { Square, Triangle, Circle } = require("./shapes");

const testShapeRendering = (ShapeClass, shapeName) => {
  describe(shapeName, () => {
    test("should render svg with specified color", () => {
      const expectedSvg = `<${shapeName} fill="green" />`;
      const shape = new ShapeClass();
      shape.setColor("green");
      const actualSvg = shape.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg = `<${shapeName} fill="blue" />`;
      const shape = new ShapeClass();
      shape.setColor("blue");
      const actualSvg = shape.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
};

testShapeRendering(Circle, "circle");
testShapeRendering(Triangle, "polygon");
testShapeRendering(Square, "rect");