const inquirer = require('inquirer');

function init() {
    inquirer
        .prompt ([
            {
                name: "text",
                message: "Enter the logo's text (maximum 3 letters):"
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
}

init();