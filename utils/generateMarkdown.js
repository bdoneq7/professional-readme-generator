// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//    function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//    function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//    function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)
  *[License](#license)
  *[Badges](#badges)
  *[Features](#features)
  *[Contributing](#contributing)
  *[Tests](#tests)

  ## Installation

  ${data[0].installation}

  ## Usage
  ${data[0].usage}

  ## Credits
  ${data[0].credits}

  ## License
  ${data[0].license}

  ## Contributing
  ${data[0].contribution}

  ## Test
  ${data[0].test}

  ## Questions
  ${data[0].questions}

  ## Github
  ${data[0].github}

  ## Email
  ${data[0].email}

`;

}

const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method 
            resolve({
                ok: true,
                message: 'Readme File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method 
            resolve({
                ok: true,
                message: 'CSS File created!'
            });
        });
    });
};

module.exports = {writeFile, copyFile};

module.exports = generateMarkdown;
