// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the name of your project?"
},
{
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["MIT", "Apache", "Boost", "None"]
},
{
    type: "input",
    name: "description",
    message: "How would you DESCRIBE your project?"
},
{
    type: "input",
    name: "usage",
    message: "What is the primary use of your project?"
},
{
    type: "input",
    name: "liveLink",
    message: "Enter the link to your deployed page:"
},
{
    type: "input",
    name: "username",
    message: "What is your github username?"
},
{
    type: "input",
    name: "email",
    message: "Please enter your email"
},
{
    type: "input",
    name: "linkdein",
    message: "What is your Linkdein?"
}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        console.log('README generated')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => writeToFile('README.md', data))
}

// Function call to initialize app
init();
