// Packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What would you like to write on your logo? (up to three characters only)',
        name: 'text',
      },
      {
        type: 'input',
        message: 'What would you like the text color to be? (color keyword OR a hexadecimal number)',
        name: 'textColor',
      },
      {
        type: 'list',
        message: 'Select the shape you would like for your for your logo.',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        message: 'What would you like the shape color to be? (color keyword OR a hexadecimal number)',
        name: 'shapeColor',
      },
];

// Function to write logo.svg file AND the output text "Generated logo.svg" is printed in the command line

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'))
}

// Function to initialize app with inquirer prompt to questions above

function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response);
    writeToFile('logo.svg', generateLogo(response));
  }
  );
}

// Function to generate logo

function generateLogo(data) {
    
}

// Function call to initialize app

init();