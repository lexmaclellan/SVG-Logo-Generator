const inquirer = require('inquirer');
const fs = require ('fs');
const shapes = require("./lib/shapes.js");

function writeToSVG(shape, text) {
    const data = `<svg version = "1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        ${shape.render()}
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
        </svg>`;
    
    fs.writeFile('shape.svg', data, (err) =>
        err ? console.error(err) : console.log("SVG created successfully.")
    );
}

function init() {
    inquirer
        .prompt ([
            {
                name: "text",
                message: "Enter the logo's text (maximum 3 characters):"
            },
            {
                name: "color",
                message: "Choose the logo's color (by keyword or hexidecimal number):"
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
                        const circle = new shapes.Circle(answers.color);
                        writeToSVG(circle, answers.text);
                        break;
                    case "Triangle":
                        const triangle = new shapes.Triangle(answers.color);
                        writeToSVG(triangle, answers.text);
                        break;
                    case "Square":
                        const square = new shapes.Square(answers.color);
                        writeToSVG(square, answers.text);
                        break;
                }
            }
        })
}

init();