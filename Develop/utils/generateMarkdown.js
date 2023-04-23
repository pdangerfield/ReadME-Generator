// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== "none") {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`; // found via this url "https://gist.github.com/qvil/5e3ed56c26d784e51424621119cc4028"
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== "none") {
        return `https://opensource.org/licenses/${license}`;
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}\n
  ${renderLicenseLink(data.license)}
  # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Credits](#credits)
6. [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}/n
${data.screenshot}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Credits
${data.credits}
## Questions
If you have any questions you can reach me at
${data.email}\n
or my GitHub 
https://github.com/${data.username} 
`;
}

module.exports = generateMarkdown;