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
const 

function doThings(){
  inquirer
  .prompt(questions).then(response => {
    let newFileName = `${response.title.toLowerCase().split(' ').join('')}`;
    var arrOfSectionsContent = [];

    response.sections.forEach(element => {
      arrOfSectionsContent.push(`## ${element} \n`)
    });
    
    createfile(newFileName, response, arrOfSectionsContent);
  })};

    // function(re-callable), takes filename and R as response from inquirer, and puts new readme into the createdReadMes folder
  function createfile(newFileName, R, SectionsContent){
    FileSystem.appendFile(`./createdReadMes/${newFileName}.md`,`
# ${R.projName}

## ${R.description}

## ${R.linkedin}

## ${R.github}

${SectionsContent.toString().split(",").join("")}
    `, 
      function (err) {
      if (err) console.log(err);
      console.log('Saved!');})
    
  }

doThings();



