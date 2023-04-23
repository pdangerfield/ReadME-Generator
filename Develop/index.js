// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide the path to the image you want to use as a screenshot",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide any instructions on how you can contribute to this application.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please list any tests instructions for this application",
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any.",
    },
    {
        type: "input",
        name: "email",
        message: "Please Enter your email.",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license that applies to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "BSD2", "MPL2.0", "BSD3", "Perl", "Artistic2.0", "none"] 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README.md file...");
        writeToFile('ReadME.md', generateMarkdown({ ...responses}));
    });
}

// Function call to initialize app
init();
