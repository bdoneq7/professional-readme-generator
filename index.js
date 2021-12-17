// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./utils/generateMarkdown.js');
const generatePage = require('./src/page-template.js');

// TODO: Create an array of questions for user input
// Q1: Title of Project
// Q2: Description
// Q3: Installation
// Q4: Usage
// Q5: Contributing
// Q6: Tests
// Q7: Questions
// const questions = [];


const promptUser = () => {
    return inquirer.prompt([ // Promise
            {
                type: 'input',
                name: 'title', // key and user input
                message: 'What is the Title of the Project?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter the Title of the Project');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please enter a Project Description',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter a Project Description');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please enter Installation Instructions',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log('Please enter Installation Instructions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please enter Usage Information',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please enter Usage Information');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Please enter License Instructions',
                choices: ['MIT', 'BSD-2-Clause', 'GPL-3.0', 'ISC', 'Apache-2.0', 'UNLICENSED']
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Please enter Contribution Guidelines',
                validate: contributionInput => {
                    if (contributionInput) {
                        return true;
                    } else {
                        console.log('Please enter Contribution Guidelines');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Please enter Test Instructions',
                validate: testInput => {
                    if (testInput) {
                        return true;
                    } else {
                        console.log('Please enter Test Instructions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Please enter Questions',
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log('Please enter Questions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your Github Username',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter Github Username');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your Email Address',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter Email Address');
                        return false;
                    }
                }
            },




        ]);
    };
    
    
    
    
    promptUser()
      .then(pageHTML => {
        return writeFile(pageHTML);
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
    




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
