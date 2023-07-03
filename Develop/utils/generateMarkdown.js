// TODO: Create a function that returns a license badge based on which license is passed in

const { default: Choices } = require("inquirer/lib/objects/choices");
const { default: CheckboxPrompt } = require("inquirer/lib/prompts/checkbox");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT License') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (license === 'ISC License') {
    return 'https://img.shields.io/badge/License-ISC-blue.svg'
  } else (license === 'WTFPL License'); {
    return 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg'
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'ISC License') {
    return '(https://opensource.org/licenses/ISC'
  } else (license === 'WTFPL License'); {
    return 'http://www.wtfpl.net/about/'
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === 'No License'
  ? ''
  : `[![License:${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseSection(data.license)}
  ## Description
  ---
  ${data.description}
  ## Table of Contents
  ---
  ${choices.table}
  ## Installation
  ---
  ${data.install}
  ## Screenshots
  ---
  ![]()
  ## Usage

  ${data.usage}
  ## Contributions
  ---
  ${data.cont}
  ## Testing
  ---
  ${data.test}
  ##Questions
  ---
  [Github](https://github.com/${data.user}/)
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;