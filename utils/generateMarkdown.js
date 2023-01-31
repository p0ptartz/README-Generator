// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else {
    return "No license used"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${renderLicenseBadge(data.license)}
  #
  ## Description: 
  ${data.description}
  #
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Live Link](#livelink)
  * [Questions](#questions)
  #
  ## Installation
  To install, please run the commmand: ${data.installation}
  #
  ## Usage: 
  ${data.usage}
  #
  ## License:
  ${renderLicenseLink(data.license)}
  #
  ## Live Link:
  [Deployed Page](${data.liveLink})
  #
  ## Questions:
  If you have any questions, feel free to contact me at ${data.email}. You can find more of my work at my [GITHUB](https://github.com/${data.username}). 
  `;
}

module.exports = generateMarkdown;
