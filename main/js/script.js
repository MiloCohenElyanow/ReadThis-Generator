const FileSystem = require("fs") 

const inquirer = require("inquirer");


const questions = [
  {
    type: 'input',
    message: 'input what your file name will be, .md will automaticaly be added to the end: ',
    name: 'title',
  },
  {
    type: 'input',
    message: 'enter your project name, this will be the main header: ',
    name: 'projName',
  },
  {
    type: 'input',
    message: 'Please type your project description: ',
    name: 'description',
  },
  {
    type:'input',
    message:'please write a briefe entry on why you made this project',
    name:'entry_why'
  },
  {
    type:'input',
    message:'please enter some things related to this applications tech stack I.E. Technologies used, libraries, modules etc... please seperate entries with -',
    name:'techstack'
  },
  {
    type:'input',
    message:'please add terms and conditions of usage here: ',
    name:'usage'
  },
  {
    type:'input',
    message:'please describe installation and how to use your app here: ',
    name:'installation'
  },
  {
    type:'input',
    message:'please describe how people could contribute to this project here: ',
    name:'contribution'
  },
  {
    type:'input',
    message:'please describe plans for future improvements, updates, or additions here: ',
    name:'futureImprovements'
  },
  {
    type:'input',
    message:'if you want to add any badges please do so here: ',
    name:'badges'
  },
  {
    type:'input',
    message:'if you want to add any liscensing please do so here: ',
    name:'liscensing'
  },
]




    // function(re-callable), takes filename and R as response from inquirer, and puts new readme into the createdReadMes folder
  function createfile(){
    inquirer
      .prompt(questions).then((R) => {
        const newFileName = `${R.title.toLowerCase().split(' ').join('')}.md`;
      
    FileSystem.appendFile(`./createdReadMes/${newFileName}`,`
#${R.projName}\n

##Description\n
-${R.description}

##Why?\n
-${R.entry_why}

##TechStack\n
-${R.techstack}

##Usage\n
-${R.usage}

##Installation\n
-${R.installation}

##Contribute\n
-${R.contribution}

##Future Improvements\n
-${R.futureImprovements}

##Badges\n
-${R.badges}

##Liscence\n
-${R.liscensing}

 
    `, 
      function (err) {
      if (err) console.log(err);
      console.log('Saved!');})
    
  }
      )}
createfile();



