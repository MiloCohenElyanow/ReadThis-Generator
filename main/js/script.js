const FileSystem = require("fs") 

const inquirer = require("inquirer");



const questions = [
  {
    type: 'input',
    message: 'please add a tittle for your readme: ',
    name: 'title',
  },
  {
    type: 'input',
    message: 'enter your project name: ',
    name: 'projName',
  },
  {
    type: 'input',
    message: 'Please type your project description: ',
    name: 'description',
  },
  {
    type:'checkbox',
    message:'please enter some sections for your readme: ',
    name: 'sections',
    choices: [,"Tech Stack", "Features", "Table of contents", "Installation", "Usage","Future improvements","How to contribute","liscense"]
  },
  {
    type:'input',
    message:'What is your Github URL',
    name:'github'
  }
]


function doThings(){
  inquirer
  .prompt(questions).then(response => {
    let newFileName = `${response.title.toLowerCase().split(' ').join('')}`;
    console.log(response);
    console.log("response.sections:   ",response.sections);

    createfile(newFileName, response);
  })};
  function createfile(newFileName, R){
    FileSystem.appendFile(`./createdReadMes/${newFileName}.md`,`# ${R.projName}

## ${R.description}

## ${R.linkedin}

## ${R.github}
    `, 
      function (err) {
      if (err) throw err;
      console.log('Saved!');})
    
  }

doThings();



