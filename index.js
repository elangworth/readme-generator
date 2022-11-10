// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//template literal of markdown
const generateMarkdown = ({ Title, Description, Install, Usage, License, Contribute, Tests, Username, Email}) => {
    return `## ${Title}
    ![GitHub](https://img.shields.io/github/license/${Username}/${Title}?logo=GitHub&logoColor=blue)

    ##Table of Contents
    * [Description](#Description)
    * [Install](#Install)
    * [Usage](#Usage)
    * [License](#License)
    * [Contribute](#Contribute)
    * [Tests](#Tests)
    * [Contact](#Contact)
    <a name="Description"></a>
    ## Description
    ${Description}
    <a name="Install"></a>
    ## Install
    ${Install}
    <a name="Usage"></a>
    ## Usage
    ${Usage}
    <a name="License"></a>
    ## License
    ${License}
    <a name="Contribute"></a>
    ## Contribute
    ${Contribute}
    <a name="Test"></a>
    ## Tests
    ${Tests}    
    <a name="Contact"></a>
    # Contact 
    * [GitHub : ${Username}](https://github.com/${Username})
    * Email :${Email}`
}

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'Description',
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    },
    {
        type: 'input',
        message: 'What is needed to install your project?',
        name: 'Install',
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    },
    {
        type: 'input',
        message: 'What is your project used for?',
        name: 'Usage',
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    },
    {
        type: 'list',
        message: 'What license did you use?',
        name: 'License',
        choices: ['MIT', 'GNU', 'Mozilla', 'None'],
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    },
    {
        type: 'input',
        message: 'What are your contributing guidelines?',
        name: 'Contribute',
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    },
    {
        type: 'input',
        message: 'What tests did you run?',
        name: 'Tests',
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Username',
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
        validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
    }
]).then((data) => {
    const readmeContent = generateMarkdown(data);
    fs.writeFile('README.md', readmeContent, (err)=> 
        err? console.error(err) : console.log("Success")
    );
});

