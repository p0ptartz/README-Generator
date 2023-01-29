// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Title:",
    message: "What is the name of your project?"
},
{
    type: "input",
    name: "Description:",
    message: "How would you DESCRIBE your project?"
},
{
    type: "input",
    name: "Usage:",
    message: "What is the primary use of your project?"
},
{
    type: "image",
    name: "Screenshots:",
    message: "Add your images",
    files: ['.jpg', '.png']
},
{
    type: "input",
    name: "LiveLink",
    message: "Enter the link to your deployed page"
},
{
    type: "input",
    name: "Username",
    message: "What is your github username?"
},
{
    type: "input",
    name: "Email",
    message: "Please enter your email"
},
{
    type: "input",
    name: "Linkdein",
    message: "What is your Linkdein?"
}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {

    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => writeToFile('README.md', data))
}

// Function call to initialize app
init();
