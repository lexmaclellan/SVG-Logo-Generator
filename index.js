const inquirer = require('inquirer');
const fs = require ('fs');
const shapes = require("./lib/shapes.js");

function writeToSVG(shape, text, textColor) {
    const data = `<svg version = "1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        ${shape.render()}
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
    
    fs.writeFile('logo.svg', data, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
    );
}

function init() {
    inquirer
        .prompt ([
            {
                type: "input",
                name: "text",
                message: "Enter the logo's text (maximum 3 characters):"
            },
            {
                type: "input",
                name: "textColor",
                message: "Enter the text color (by keyword or hexidecimal value):"
            },
            {
                type: "input",
                name: "bgColor",
                message: "Choose the logo's color (by keyword or hexidecimal value):"
            },
            {
                type: "list",
                name: "shape",
                message: "Choose the shape of your logo:",
                choices: ["Circle", "Triangle", "Square"]
            }
        ])
        .then (answers => {
            if (answers.text.length > 3) {
                console.log("Error: Text cannot be more than 3 characters.");
            }
            else {
                switch (answers.shape) {
                    case "Circle":
                        const circle = new shapes.Circle();
                        circle.setColor(answers.bgColor);
                        writeToSVG(circle, answers.text, answers.textColor);
                        break;
                    case "Triangle":
                        const triangle = new shapes.Triangle();
                        triangle.setColor(answers.bgColor);
                        writeToSVG(triangle, answers.text, answers.textColor);
                        break;
                    case "Square":
                        const square = new shapes.Square();
                        square.setColor(answers.bgColor);
                        writeToSVG(square, answers.text, answers.textColor);
                        break;
                }
            }
        })
}

init();