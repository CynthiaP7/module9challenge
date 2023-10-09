
function generateMarkdown(data) {
  return `# ${data.title}

  # ${data.title}
  https://github.com/${data.Username}/${data.Title}
  #Description
  ${data.Description}
  # Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  #Installation
  The following dependencies must be installed for the application to run properly: ${data.Installation}
  #Usage
  To use the app, ${data.Usage}
  #License
  This project is licensed under ${data.License}
  #Contributing
  Contributors: ${data.Contributors}
  #Tests
  These are needed to run the test: ${data.Tests}
  #Questions
  If you have any questions, contact ${data.Username} or send an email at ${data.Email}
`;
}

module.exports = generateMarkdown;
