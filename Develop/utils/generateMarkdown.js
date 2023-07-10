function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "ISC License") {
    return "https://img.shields.io/badge/License-ISC-blue.svg";
  } else if (license === "PEARL License") {
    return "https://img.shields.io/badge/License-Perl-0298c3.svg";
  } else if (license === "MOZILLA License") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
  } else if (license === "ECLIPSE License") {
    return "https://img.shields.io/badge/License-EPL_1.0-red.svg";
  } else if (license === "WTFPL License") {
    return "https://img.shields.io/badge/License-WTFPL-brightgreen.svg";
  } else {
    return "test";
  }
}

function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "ISC License") {
    return "https://opensource.org/licenses/ISC";
  } else if (license === "PEARL License") {
    return "https://opensource.org/licenses/Artistic-2.0";
  } else if (license === "MOZILLA License") {
    return "https://opensource.org/licenses/ISC";
  } else if (license === "ECLIPSE License") {
    return "https://opensource.org/licenses/EPL-1.0";
  } else if (license === "WTFPL License") {
    return "http://www.wtfpl.net/about/";
  } else {
    return "test";
  }
}

function renderLicenseSection(license) {
  return license === "No License"
    ? ""
    : `[![License:${license}](${renderLicenseBadge(
        license
      )})](${renderLicenseLink(license)})`;
}

function generateMarkdown(data) {
  const tableOptions = data.table.map((option) => option);
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description
  ---
  ${data.description}
  ## Table of Contents
  ---
  ${tableOptions}
  ## Installation
  ---
  ${data.install}
  ## Screenshots
  ---
  ![]()
  ## Usage
  ---
  ${data.usage}
  ## Contributions
  ---
  ${data.cont}
  ## Testing
  ---
  ${data.testing}
  ## Questions
  ---
  [Github](https://github.com/${data.username}/)
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
