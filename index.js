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