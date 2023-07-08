const inquirer = require('inquirer');

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
                        break;
                    case "Triangle":
                        break;
                    case "Square":
                        break;
                }
            }
        })
}

init();