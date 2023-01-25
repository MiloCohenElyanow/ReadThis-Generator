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
    var arrOfSectionsContent
    // response.sections.forEach(element => {
    //   // arrOfSectionsContent.push(`## ${element} \n `);

    //   inquirer.prompt([{type:`input`,message:`add content to ${element} section`, name:`sections-${element}-content`}]).then(response => {
    //     arrOfSectionsContent.push(`## ${element} \n -${response}`)
    //   })
    // });
    promptsectionscontent(response);

    createfile(newFileName, response, arrOfSectionsContent);
  })};

// maybe need async here
  async function promptsectionscontent(response){

    var arrOfSectionsContent = Promise.all(
      response.sections.map(async element => {
      // arrOfSectionsContent.push(`## ${element} \n `);
        const getsectionscontent = [
          {type:`input`,
          message:`add content to ${element} section`, 
          name:`sections-${element}-content`
          }]
      return await inquirer.prompt(getsectionscontent)
    }))
    console.log(arrOfSectionsContent);
  }; 

    // function(re-callable), takes filename and R as response from inquirer, and puts new readme into the createdReadMes folder
  function createfile(newFileName, R, SectionsContent){
    FileSystem.appendFile(`./createdReadMes/${newFileName}.md`,`
# ${R.projName}

## ${R.description}

## ${R.linkedin}

## ${R.github}






--sectionscontent splitting thing

${SectionsContent.toString()} 
    `, 
      function (err) {
      if (err) console.log(err);
      console.log('Saved!');})
    
  }

doThings();



