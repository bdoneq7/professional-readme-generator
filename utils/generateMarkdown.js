// Include File System Core Node Module
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function createBadge(license) {
  if (license === 'UNLICENSED') {
    return ``
  };

  if (license === 'MIT') {
    return `<img src="https://img.shields.io/github/license/bdoneq7/professional-readme-generator?color=Green&label=MIT">`
  };

  if (license === 'GNU') {
    return `<img src="https://img.shields.io/github/license/bdoneq7/professional-readme-generator?color=Green&label=GNU">`
  };

  if (license === 'Apache') {
    return `<img src="https://img.shields.io/github/license/bdoneq7/professional-readme-generator?color=Green&label=Apache">`
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function createLink(license) {
  if (license === 'None') {
    return ``
  }

  if (license) {
    return `[${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function createSection(license) {
  if (license.badges[0] === 'UNLICENSED') {
    return ``
  };
  if (license) {
    return `## License
    
   ${createBadge(license.badges[0])}
   ${createLink(license.badges[0])} 
    
    `
  };
};


// TODO: Create a function to generate markdown for README

function createReadme(userInput) {
    return `
    ${createBadge(userInput.badges[0], userInput.github, userInput.title)}
    # ${userInput.title}

    ## Description
    ${userInput.description}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${userInput.install}

    ## Usage
    Review Video to Learn How to Use this App
    
    ## Credits
    ${userInput.credit}
    ${createSection(userInput)}

    
    ## Contributing
    ${userInput.contribute}

    ## Tests
    
    <img src= "https://user-images.githubusercontent.com/87787132/146451672-08bbcb79-a80e-4679-a64d-70f5f2c646c9.png">
    How to Test: ${userInput.test}
    
    ## Questions
    
    **Email**: ${userInput.email}
    
    **Github**: [${userInput.github}](https://github.com/${userInput.github})
    `;
  }
  
  
  module.exports = createReadme;
  
