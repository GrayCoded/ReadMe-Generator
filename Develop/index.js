
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);
const fs = require(`fs`);
// TODO: Create an array of questions for user input

inquirer
.prompt ([
{
    type:'input',
    message: 'Title of Project:',
    name: 'title',
},{
    type:'input',
    message: 'Enter Project Description:',
    name: 'description'
},{
    type: 'checkbox',
    message: 'Table of Contents:',
    name: 'table',
    prefix: 'Check off ones that apply to your project.',
    choices: [
        {name: 'Installation'},
        {name: 'Usage'},
        {name: 'Contribution'},
        {name: 'Testing'},
        {name: 'Questions'}

    ]
},{
    type: 'input',
    message: 'Installation requirements:',
    name: 'install'
},{
    type: 'list',
    message: 'License',
    choices: ['MIT License','ISC License','WTFPL License','No License'],
    name: 'license'
},{
    type: 'input',
    message: 'Descibe any Contributions to your Project:',
    name: 'cont'
},{
    type: 'input',
    message: 'Testing:',
    name: 'test'
},{
    type: 'input',
    message: 'Enter your Github username:',
    name: 'user'
},{
    type: 'input',
    message: 'Enter your email:',
    name: 'email'
}

])

.then(data => {
    const mdContent = generateMarkdown(data)
    writeToFile('README.md, mdContent')
})
.catch(error => {
    console.error('Error has Occured: ', error)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {throw error} else {
            console.log(`File saved ${success} check folder`)
        }
    })
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
