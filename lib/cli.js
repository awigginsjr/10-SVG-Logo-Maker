// packages required for this application
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    // constructor() {
    //     this.run();
    //   }    
    async run() {
        try {
          const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
        {
            name: "text",
            type: "input",
            message:
              "Please input up to three characters for the logo",
              validate: function(text) {
                if (text.length <= 3) {
                // Validation passed
                    return true; 
                } else {
                // Validation failed
                    return "Please input only up to three characters";
                }
            }
            // validate: (text) =>
            //   text.length <= 3 ||
            //   "The message must not contain more than 3 characters",
          },
          {
            name: "textColor",
            type: "input",
            message: "Please input a text color (OR a hexadecimal number)",
          },
          {
            name: "shapeType",
            type: "list",
            message: "Please select a shape from the list below for the logo",
            choices: ["Circle", "Square", "Triangle"],
          },
          {
            name: "shapeColor",
            type: "input",
            message: "Please input a shape color (OR a hexadecimal number)",
          },
        ]);

          let shape;
          switch (shapeType) {
            case "circle":
              shape = new Circle();
              break;
  
            case "square":
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
          console.log("Generated logo.svg");
        } catch (error) {
          console.log(error);
          console.log("Oops! Something went wrong.");
        }
    }
  }
  // Function call to initialize app
  module.exports = CLI;