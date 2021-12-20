// TODO: Include packages needed for this application
// Include NPM Inqurier Package and Core Node File System Package
// Include generateMarkdown.js file with Readme Structure

const inquirer = require('inquirer');
const fs = require('fs');
const createReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the Title of your Project', // Project Title Question
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Error: Please enter the Title of your Project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github Username', // Github Username Question
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Error: Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email Address', // Email Address Question
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Error: Please enter your Email Address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter your Project Description', // Project Description Question
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Error: Please enter your Project Description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'badges',
            message: 'Please enter your App License', // License Question
            choices: ['MIT', 'GNU', 'Apache-2.0']
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter your Installation Instructions', // Installation Instructions Question
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Error: Please enter your Installation Instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter your App Testing Instructions', // App Testing Instructions
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Error: Please enter your App Test Instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Please enter your Author Credit', // Author Credit Question
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log('Error: Please enter your Author Credit!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please enter your Contribution Guidelines', // Contribution Guidelines
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Error: Please enter your Contribution Guidelines');
                    return false;
                }
            }
        },
    ])
}

// Function to Generate Readme File based on User Input
const createFile = (generatePage, userInput) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${userInput.title}.md`, generatePage, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme File was created Successfully!'
            })

        })
    })

};



async function init() {
    try {
        const userInput = await promptUser();
        const generatePage = createReadme(userInput);

        return createFile(generatePage, userInput);
    } catch (err) {
        console.log(err);
    }
}

init();