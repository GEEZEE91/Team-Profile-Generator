// specify modules needed for team profile generator to work
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const generateHTML = require('./lib/generateHTML');

let EmployeeArray = [];


// prompt initial manager questions
const promptUser = () => {
  inquirer.prompt([
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
  ])
   .then(answers => {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
          EmployeeArray.push(manager);
          role();
      })
}

role = () => {
  inquirer.prompt([
      {
          type: "list",
          message: "Please choose the role of the employee you are adding",
          choices: ["Engineer", "Intern", "Team Finished"],
          name: "role"
      }
  ])
      .then(answers => {
          switch (answers.role) {
              case "Engineer":
                  addEngineer();
                  break;
              case "Intern":
                  addIntern();
                  break;
              case "Team Finished":
                console.log(EmployeeArray);
                generateTeam();
                  break;
          }
      })
}

addEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the Engineers NAME?",
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
  ])
      .then(answers => {
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          EmployeeArray.push(engineer);
          role();
      })
}

addIntern = () => {
  inquirer.prompt([
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
  ])
      .then(answers => {
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          EmployeeArray.push(intern);
          role();
      })
}

  function generateTeam() {
    fs.writeFileSync('./dist/teamindex.html', generateHTML(EmployeeArray));
    console.log('Team Generated');
  }

  promptUser();