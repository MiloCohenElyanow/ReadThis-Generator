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
    message: 'Tell me about yourself',
    name: 'bio',
  },
  {
    type:'input',
    message:'What is your linkedin URL',
    name: 'linkedin'
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
    createfile(newFileName, response);
  })};
  function createfile(newFileName, R){
    FileSystem.appendFile(`./createdReadMes/${newFileName}.md`,`# ${R.projName}

## ${R.bio}

## ${R.linkedin}

## ${R.github}
    `, 
      function (err) {
      if (err) throw err;
      console.log('Saved!');})
    
  }

doThings();