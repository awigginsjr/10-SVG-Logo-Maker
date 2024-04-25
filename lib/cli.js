// packages required for this application
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Square, Triangle } = require("./shapes");
const { writeFile } = require("fs/promises");

// prompts to input up to three characters, text color || hex, shape type and color || hex for the logo.svg file
// returns error if less than or more than three characters
// if three characters logo.svg file will be written 
class CLI {  
    async run() {
        try {
          const { text, textColor, shapeType, shapeColor } = await 
          inquirer.prompt([
        {
            name: "text",
            type: "input",
            message:
              "Please input up to three characters for the logo:",
              validate: function(text) {
                if (text.length <= 3) {
                    return true; 
                } else {
                    return "Please input only up to three characters:";
                }
            }
          },
          {
            name: "textColor",
            type: "input",
            message: "Please input a text color (OR a hexadecimal number):",
          },
          {
            name: "shapeType",
            type: "list",
            message: "Please select a shape from the list below for the logo:",
            choices: ["Circle", "Square", "Triangle"],
          },
          {
            name: "shapeColor",
            type: "input",
            message: "Please input a shape color (OR a hexadecimal number):",
          },
        ]);

          let shape;
          switch (shapeType) {
            case "Circle":
              shape = new Circle();
              break;
  
            case "Square":
              shape = new Square();
              break;
  
            default:
              shape = new Triangle();
              break;
          }

          shape.setColor(shapeColor);
  
          const svg = new SVG();
          svg.setText(text, textColor);
          svg.setShape(shape);
        
          await writeFile("logo.svg", svg.render());
          console.log("logo.svg is ready");
        } catch (error) {
          console.log(error);
          console.log("Oops! logo.svg is not ready.");
        }
    }
  }

// Function call to initialize app
  module.exports = CLI;