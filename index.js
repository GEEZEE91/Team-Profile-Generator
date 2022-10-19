// specify modules needed for team profile generator to work

const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const generateHTML = require('./lib/generateHTML');

let EmployeeArray = [];

// prompt initial question
const role = [
    {
      type: 'list',
      name: 'role',
      message: 'Please choose the role of the employee are adding.',
      choices: ['Manager', 'Engineer', 'Intern', 'Team Finished']
    }
  ];
 // prompt for manager questions
const manager = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Mangers NAME?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is the employee ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee EMAIL?',
    },
    {
      type: 'number',
      name: 'officeNumber',
      message: 'What is the Managers Office Number?'
    }
  
  ];
  
  // prompt for questions
  const engineer = [
    {
      type: 'input',
      name: 'name',
      message: "What is thr Engineers NAME?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is the employee ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee EMAIL?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is their GITHUB username?'
    }
  
  ];
  
  // prompt for questions
  const intern = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Interns NAME?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is the employee ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee EMAIL?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What SCHOOL did the Intern attend?'
    }
  ];
  
   
  // start app & prompt questions
function init() {
    inquirer.prompt(role).then(answers => {
      // finished adding employees make team
      if (answers.role === 'Team Finished') {
        console.log(EmployeeArray);
        generateTeam();
        return;
      }
      // manager, engineer and intern info 
      if (answers.role === 'Manager') {
        inquirer.prompt(manager).then(answers => {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
          EmployeeArray.push(manager);
          init();
        })
      }

      if (answers.role === 'Engineer') {
        inquirer.prompt(engineer).then(answers => {
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          EmployeeArray.push(engineer);
          init();
        })
      }

      if (answers.role === 'Intern') {
        inquirer.prompt(intern).then(answers => {
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          EmployeeArray.push(intern);
          init();
        })
      }
    })
  }; 

  init();

  function generateTeam() {
    fs.writeFileSync('./dist/teamindex.html', generateHTML(EmployeeArray));
    console.log('Team Generated');
  };