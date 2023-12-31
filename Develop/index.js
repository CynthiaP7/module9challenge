// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ('fs');
const util = require ("util");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
}, {
    type: "input",
    message: "What is the project about?",
    name: "Description",
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
}, {
    type: "input",
    message: "What does the user need to install to run this app?",
    name: "Installation",
}, {
    type: "input",
    message: "How is the app used?",
    name: "Usage",
}, {
    type: "input",
    message: "What license is being used?",
    name: "License",
}, {
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributors",
}, {
    type: "input",
    message: "What commands are needed to run the app?",
    name: "Tests",
}, {
    type: "input",
    message: "If there are questions, how can users reach you?",
    name: "Questions",
}, {
    type: "input",
    message: "What is your Github username?",
    name: "Username",
}, {
    type: "input",
    message: "What is your email?",
    name: "Email",
},

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
       console.log(fileName)
       console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
